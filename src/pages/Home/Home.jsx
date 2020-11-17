import React from "react";
import { Button, Section } from "../../components";

function Home() {
  return (
    <>
      <Section>
        <Button color="primary" handleClick={() => alert("Hi")}>
          Check React out
        </Button>
      </Section>
    </>
  );
}

export default Home;
