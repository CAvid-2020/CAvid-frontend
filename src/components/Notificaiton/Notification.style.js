import styled from "styled-components";

export const NotificationBox = styled.div`
  width: 100%;
  font-size: 1em;
  padding: 1em 0 1em 1em;
  color: white;
  font-weight: bolder;
  background-color: ${(props) =>
    props.color === "error" ? props.theme.lightRed : props.theme.darkGreen};
`;

export const NotificationButton = styled.button`
  position: absolute;
  color: white;
  width: 1em;
  border-radius: 50%;
  top: 26px;
  right: 12px;
  background: black;
  padding: 0;
  border: none;
  cursor: pointer;
`;
