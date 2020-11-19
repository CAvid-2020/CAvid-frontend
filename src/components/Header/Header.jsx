import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">Register Attendance</S.StyledLink>
        <S.StyledLink to="/check">Check Attendance</S.StyledLink>
        <S.StyledLink to="/checkregister">Register and Check</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
