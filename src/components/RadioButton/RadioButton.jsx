import React from "react";
import * as S from "./RadioButton.style";

function RadioButton({ callback, value }) {
  return (
    <S.RadioButton
      type="radio"
      value={value}
      name="student"
      onChange={callback}
    ></S.RadioButton>
  );
}

export default RadioButton;
