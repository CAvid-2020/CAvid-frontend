import styled from "styled-components";

export const Box = styled.div`
  margin: 1em;
  text-align: center;
`;

export const H2 = styled.h2`
  margin-bottom: 2em;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 550px) {
    font-size: 1.1em;
  }
`;
