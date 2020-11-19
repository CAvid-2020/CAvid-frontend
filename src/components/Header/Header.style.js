import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px 3px ${(props) => props.theme.primaryColor};
  padding: 1em;
  background-color: ${(props) => props.theme.primaryColor};
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    text-decoration: underline;
    transition: 0.5s;
    color: ${(props) => props.theme.secondaryColor};
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
