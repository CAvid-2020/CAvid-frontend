import React, { useState, useEffect } from "react";
import { Section, Table } from "../../components";
import * as S from "./About.style";

function About() {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/attendance`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(
          data.filter(
            (student, index) =>
              data.findIndex((item) => item.id === student.id) === index
          )
        );
      });
  }, []);

  return (
    <Section>
      <S.H2>Check Attendances in CA Front-End</S.H2>
      <Table students={students} />
    </Section>
  );
}

export default About;
