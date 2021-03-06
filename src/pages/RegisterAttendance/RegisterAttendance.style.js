import styled from "styled-components";

export const ButtonBox = styled.div`
  margin-top: 1em;
  text-align: right;
  padding-right: 1em;
  @media only screen and (max-width: 550px) {
    padding-right: 0.5em;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 2em;
  color: ${({ theme }) => theme.textColor};
  text-align: center;

  @media only screen and (max-width: 550px) {
    font-size: 1.1em;
  }
`;

export const Error = styled.h1`
  text-align: center;
  color: red;
  border-radius: 5px;
  padding: 5px;
  background-color: black;
`;

export const NotifBox = styled.div`
  width: 100%;
  padding: 1em;
`;
