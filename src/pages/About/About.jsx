import React from "react";
import { Section, Table, Button } from "../../components";
import * as S from "./About.style";

function About() {
  return (
    <Section>
      <S.H2>Check Attendances in CA Front-End</S.H2>
      <Table />
      <S.ButtonBox>
        <Button color="primary">Submit</Button>
      </S.ButtonBox>
    </Section>
  );
}

export default About;
