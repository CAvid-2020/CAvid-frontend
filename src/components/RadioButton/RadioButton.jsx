import React from "react";

function RadioButton({ callback }) {
  return (
    <input
      type="radio"
      value="false"
      name="student"
      onChange={callback}
    ></input>
  );
}

export default RadioButton;
