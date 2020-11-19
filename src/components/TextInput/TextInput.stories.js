import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "./TextInput";

storiesOf("Input", module).add("Input", () => (
  <Input labelText="How are you?" placeholder="I am doing well" name="good" />
));
