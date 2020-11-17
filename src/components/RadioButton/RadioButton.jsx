import React from "react";

function RadioButton({ callback }) {
  return (
    <input type="radio" value="true" name="student" onChange={callback}></input>
  );
}

export default RadioButton;
