import React from "react";
import * as S from "./Table.style";
import { RadioButton } from "../../components";

function Table({ students, callback, thArr }) {
  switch (window.location.href) {
    case "http://localhost:3000/about":
      thArr = [
        { th: "Name" },
        { th: "Surname" },
        { th: "Email" },
        { th: "Attendance" },
      ];
      break;
    default:
      thArr = [{ th: "Name" }, { th: "Surname" }, { th: "Attendance" }];
  }

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          {thArr.map((item) => (
            <th key={item.th}>{item.th}</th>
          ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {students &&
          students.map((student) => (
            <S.Tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>
                <RadioButton callback={callback} value={student.id} />
              </td>
            </S.Tr>
          ))}
      </S.Tbody>
    </S.Table>
  );
}

export default Table;
