import React, { useEffect, useState } from "react";
import { Table, Section, Button } from "../../components";
import * as S from "./RegisterAttendance.style";
import { useHistory } from "react-router-dom";

function sendData(studentid, history) {
  fetch(`http://localhost:8080/attendance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_id: studentid,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      history.push("/check");
    })
    .catch((err) => console.log(err));
}

const convertDate = (data) => {
  data = data.toString();
  let parts = data.split(" ");
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return parts[3] + "-" + months[parts[1]] + "-" + parts[2];
};

function RegisterAttendance() {
  const [students, setStudents] = useState();
  const [studentid, setStudentsId] = useState();
  const time = 19;
  const history = useHistory();

  function validateData() {
    fetch(`http://localhost:8080/attendance`)
      .then((res) => res.json())
      .then((data) => {
        const dataFilter = data.filter(
          (e) => e.date.slice(0, 10) === convertDate(new Date())
        );
        const selected = [...new Set(dataFilter.map((e) => e.student_id))];
        if (selected.includes(Number(studentid))) {
          alert("You have been already checked in");
        } else {
          sendData(studentid, history);
        }
      });
  }

  useEffect(() => {
    fetch(`http://localhost:8080/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <>
      {time >= 18 && time <= 22 ? (
        <Section>
          <S.H2>Register Your Attendance for CA Front-End</S.H2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validateData();
            }}
          >
            <Table
              tharr={[{ th: "Name" }, { th: "Surname" }, { th: "Attendance" }]}
              students={students}
              callback={(e) => {
                setStudentsId(e.target.value);
              }}
            />
            <S.ButtonBox>
              <Button color="primary">Submit</Button>
            </S.ButtonBox>
          </form>
        </Section>
      ) : (
        <S.Error>The system only works in lecture time range</S.Error>
      )}
    </>
  );
}

export default RegisterAttendance;
