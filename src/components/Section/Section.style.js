import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.background};
  padding: 1em 0;
`;

export const Container = styled.div`
  max-width: 760px;
  padding: 1em 2em;
  margin: 0 auto;
  @media only screen and (max-width: 500px) {
    padding: 0;
    margin: 0 auto;
  }
`;
