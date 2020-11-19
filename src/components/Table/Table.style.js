import styled from "styled-components";

export const Table = styled.table`
  box-shadow: 3px 3px 3px grey;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.secondaryColor};
  @media only screen and (max-width: 500px) {
    font-size: small;
  }
`;

export const Thead = styled.thead`
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 1em;
`;

export const Tbody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.textColor};
`;

export const Tr = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.primaryColorBackground};
    color: ${({ theme }) => theme.primaryColorLighter};
    Button {
      background-color: ${({ theme }) => theme.primaryColor};
      &:hover {
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
  border: 1px solid ${({ theme }) => theme.textColor};

  & th {
    padding: 0.6em;
    color: white;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.textColor};
  }
  & td {
    padding: 0.5em;
    border: 1px solid ${({ theme }) => theme.textColor};
  }
  & td:last-child {
    text-align: center;
  }
`;
