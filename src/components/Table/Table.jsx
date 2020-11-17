import React from "react";
import * as S from "./Table.style";
import { RadioButton } from "../../components";

function Table({ students }) {
  const thArr = [
    { th: "Name" },
    { th: "Surname" },
    { th: "Email" },
    { th: "Attendance" },
  ];
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
              <td>{student.email}</td>
              <td>
                <RadioButton />
              </td>
            </S.Tr>
          ))}
      </S.Tbody>
    </S.Table>
  );
}

export default Table;
