import React, { useEffect, useState } from "react";
import { Table, Section, Button, Notification } from "../../components";
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

const pass = prompt("Enter password");

function RegisterAttendance() {
  const [students, setStudents] = useState();
  const [studentid, setStudentsId] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const time = new Date().getHours();
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
          setError(true);
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
    fetch(`http://localhost:8080/passvalidation`)
      .then((res) => res.json())
      .then((data) => {
        setPassword(data);
      });
  }, []);
  return (
    <>
      {pass === password && time >= 18 && time <= 22 ? (
        <Section>
          <S.H2>Register Your Attendance for CA Front-End</S.H2>
          {error && (
            <Notification color="error" handleChange={() => setError(false)}>
              "You already checked in"
            </Notification>
          )}
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
        <S.Error>System error</S.Error>
      )}
    </>
  );
}

export default RegisterAttendance;
