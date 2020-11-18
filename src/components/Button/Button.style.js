import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "primary" ? props.theme.darkGreen : props.theme.lightGreen};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  border-radius: 5px;
  padding: 0.5em 2em;
  border: none;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.color === "primary"
        ? props.theme.lightGreen
        : props.theme.darkGreen};
    color: ${(props) =>
      props.color === "primary" ? "#111" : props.theme.secondary.hover.color};
    font-weight: bolder;
    /* border: 1px solid ${({ theme }) => theme.textColor}; */
  }
  &:focus {
    outline: ${(props) =>
      props.color === "primary"
        ? props.theme.darkGreen
        : props.theme.lightGreen};
  }
`;
