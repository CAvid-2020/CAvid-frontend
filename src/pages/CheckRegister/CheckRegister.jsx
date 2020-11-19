import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Section, Table, TextInput, Button } from "../../components";
import * as S from "./CheckRegister.style";

function sendData(name, surname, email) {
  const password = prompt("Please enter the password");
  if (password != null) {
    fetch(`http://localhost:8080/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, name, surname, email }),
    })
      .then(() => {
        alert("Student has been added");
      })
      .catch((err) => console.log(err));
  }
}

function CheckRegister() {
  const [students, setStudents] = useState();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(
          data.reduce(
            (x, y) =>
              x.findIndex((e) => e.name === y.name) < 0 ? [...x, y] : x,
            []
          )
        );
      });
  }, []);

  return (
    <Section>
      <S.Box>
        <S.H2>Student list</S.H2>
      </S.Box>

      <Table
        tharr={[{ th: "Name" }, { th: "Surname" }, { th: "Email" }]}
        students={students}
      />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          sendData(name, surname, email);
        }}
      >
        <h2>Add Student Details</h2>
        <S.Block>
          <TextInput
            labelText="Name"
            placeholder="Add name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </S.Block>

        <S.Block>
          <TextInput
            labelText="Surname"
            placeholder="Add surname"
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </S.Block>

        <S.Block>
          <TextInput
            labelText="Name"
            placeholder="Add email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.Block>
        <S.Block>
          <Button color="primary">Add Student</Button>
        </S.Block>
      </S.Form>
    </Section>
  );
}

export default CheckRegister;
