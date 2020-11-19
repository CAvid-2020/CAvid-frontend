import React from "react";
import * as S from "./TextInput.style";

function TextInput({ labelText, placeholder, name, onChange }) {
  return (
    <S.Label>
      {labelText}
      <S.Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </S.Label>
  );
}

export default TextInput;
