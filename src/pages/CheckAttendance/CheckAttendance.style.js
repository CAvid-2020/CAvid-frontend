import styled from "styled-components";

export const Box = styled.div`
  margin: 1em;
  text-align: center;
  span {
    margin-right: 5px;
    font-weight: 600;
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
