import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  line-height: 1.5em;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #eee;
  &:focus {
    outline: 0;
    border: 1px solid #888;
  }
`;

export const Label = styled.label`
  padding-left: 0.2em;
`;
