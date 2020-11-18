import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, value }) {
  return (
    <S.Button onClick={handleClick} color={color} type="submit" value={value}>
      {children}
    </S.Button>
  );
}

export default Button;
