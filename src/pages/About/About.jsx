import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Section, Table } from "../../components";
import * as S from "./About.style";

function About() {
  const [students, setStudents] = useState();
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

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
      <DatePicker
        selected={startDate}
        onChange={(data) => setStartDate(data)}
        filterDate={isWeekday}
        placeholderText="Select a weekday"
      />
      <Table students={students} />
    </Section>
  );
}

export default About;
