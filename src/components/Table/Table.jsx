import React from "react";
import * as S from "./Table.style";
import { RadioButton, Button } from "../../components";

function Table({ students, callback, tharr, deletes }) {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          {tharr.map((item) => (
            <th key={item.th}>{item.th}</th>
          ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {students &&
          students.map((student) => {
            switch (window.location.href) {
              case "http://localhost:3000/check":
                return (
                  <S.Tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{student.email}</td>
                    <td>
                      {
                        <Button handleClick={deletes} value={student.id}>
                          Delete
                        </Button>
                      }
                    </td>
                  </S.Tr>
                );
              case "http://localhost:3000/checkregister":
                return (
                  <S.Tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{student.email}</td>
                    <td>
                      {
                        <Button handleClick={deletes} value={student.id}>
                          Delete
                        </Button>
                      }
                    </td>
                  </S.Tr>
                );

              default:
                return (
                  <S.Tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>
                      <RadioButton callback={callback} value={student.id} />
                    </td>
                  </S.Tr>
                );
            }
          })}
      </S.Tbody>
    </S.Table>
  );
}

export default Table;
