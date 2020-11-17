import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px 2px goldenrod;
  padding: 1em;
  background-color: ${(props) => props.theme.darkGreen};
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
    transition: 0.5s;
    color: goldenrod;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
