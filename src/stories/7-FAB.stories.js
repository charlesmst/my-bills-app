import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import FAB from "../components/FAB";
import Container from "../components/Container";
export default {
  title: "FAB",
  component: FAB
};

export const AddButton = () => (
  <Container>
    <FAB />
  </Container>
);
export const CustomIcon = () => (
  <Container>
    <FAB icon={"bars"} title={"Bars Icon"} />
  </Container>
);
