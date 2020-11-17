import React from "react";
import * as S from "./Header.style";

function Header() {
  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
