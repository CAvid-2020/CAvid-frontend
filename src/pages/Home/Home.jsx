import React, { useEffect, useState } from "react";
import { Table, Section, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";

function sendData(studentid, history) {
  fetch(`http://localhost:8080/attendance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_id: studentid,
      attendance: "true",
      date: new Date(),
    }),
  })
    .then((res) => res.json())
    .then(() => {
      history.push("/about");
    })
    .catch((err) => console.log(err));
}

function Home() {
  const [students, setStudents] = useState();
  const [studentid, setStudentsId] = useState();
  const history = useHistory();

  function validateData() {
    fetch(`http://localhost:8080/attendance`)
      .then((res) => res.json())
      .then((data) => {
        const smth = [...new Set(data.map((e) => e.student_id))];
        const asd = Number(studentid);
        if (smth.includes(asd)) {
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
      <Section>
        <S.H2>Register Your Attendance for CA Front-End</S.H2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
        >
          <Table
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
    </>
  );
}

export default Home;
