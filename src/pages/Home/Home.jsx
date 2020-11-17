import React, { useEffect, useState } from "react";
import { Table, Section, Button } from "../../components";
import * as S from "./Home.style";

function sendData(radio, student, e) {
  e.preventDefault();
  console.log(radio);
  fetch(`http://localhost:8080/attendance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_id: student.id,
      attendance: radio,
      date: new Date(),
    }),
  });
}

function Home() {
  const [radio, setRadio] = useState();
  const [students, setStudents] = useState();
  console.log(radio);
  console.log(students);

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
        <form onSubmit={(e) => sendData(radio, students, e)}>
          <Table
            students={students}
            callback={(e) => console.log(e.target.value)}
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
