import styled from "styled-components";

export const Table = styled.table`
  box-shadow: 3px 3px 3px grey;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.lightGreen};
`;

export const Thead = styled.thead`
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 1em;
`;

export const Tbody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.textColor};
`;

export const Tr = styled.tr`
  border: 1px solid ${({ theme }) => theme.textColor};

  & th {
    padding: 0.6em;
    color: white;
    background-color: ${({ theme }) => theme.darkGreen};
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
