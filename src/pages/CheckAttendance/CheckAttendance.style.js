import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Box = styled.div`
  margin: 1em;
  text-align: center;
`;

export const H2 = styled.h2`
  margin-bottom: 2em;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 550px) {
    font-size: 1.2em;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  background-color: ${({ theme }) => theme.lightGreen};
  border: 1px solid ${({ theme }) => theme.textColor};
  width: 80%;
  text-align: center;
  height: 2em;
  border-radius: 5px;
  color: ${({ theme }) => theme.darkGreen};
  font-weight: bold;
`;
