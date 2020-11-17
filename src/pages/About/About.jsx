import React from "react";
import { Section, Table, Button } from "../../components";
import * as S from "./About.style";

function About() {
  return (
    <Section>
      <Table />
      <S.ButtonBox>
        <Button color="primary">Submit</Button>
      </S.ButtonBox>
    </Section>
  );
}

export default About;
