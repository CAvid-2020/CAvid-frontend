import React from "react";

function RadioButton({ callback, value }) {
  return (
    <input
      type="radio"
      value={value}
      name="student"
      onChange={callback}
    ></input>
  );
}

export default RadioButton;
