import React from "react";
import * as S from "./Table.style";

function Table() {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Attendance</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody></tbody>
    </S.Table>
  );
}

export default Table;
