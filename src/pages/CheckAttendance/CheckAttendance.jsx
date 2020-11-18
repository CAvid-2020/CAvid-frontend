import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Section, Table } from "../../components";
import * as S from "./CheckAttendance.style";

function CheckAttendance() {
  const [students, setStudents] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

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

  useEffect(() => {
    fetch(`http://localhost:8080/attendance`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(
          data
            .filter((e) => e.date.slice(0, 10) === convertDate(startDate))
            .reduce(
              (x, y) =>
                x.findIndex((e) => e.name === y.name) < 0 ? [...x, y] : x,
              []
            )
        );
      });
  }, [startDate]);

  function deleteButton(e) {
    const pass = prompt("Please enter the password");
    const studentId = e.target.value;
    if (pass != null) {
      fetch(`http://localhost:8080/delete/${studentId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ pass }),
      });
    }
  }

  return (
    <Section>
      <S.Box>
        <S.H2>Check Attendances in CA Front-End</S.H2>
        <span>Select date:</span>
        <S.StyledDatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(data) => {
            setStartDate(data);
          }}
          filterDate={isWeekday}
          placeholderText="Select a weekday"
        />
      </S.Box>
      <Table students={students} deletes={(e) => deleteButton(e)} />
    </Section>
  );
}

export default CheckAttendance;
