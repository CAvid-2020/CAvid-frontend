import React, { useEffect, useState } from "react";
import { Table, Section, Button } from "../../components";
import * as S from "./Home.style";

function sendData(studentid, e) {
  e.preventDefault();
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
  });
}

function Home() {
  const [students, setStudents] = useState();
  const [studentid, setStudentsId] = useState();

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
        <form onSubmit={(e) => sendData(studentid, e)}>
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
