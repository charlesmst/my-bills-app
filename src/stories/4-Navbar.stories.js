import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
export default {
  title: "Navbar",
  component: Navbar
};

export const Active = () => (
  <Container>
    <Navbar active={true} toggle={action("toggle")} />
  </Container>
);

export const Inactive = () => (
  <Container>
    <Navbar active={false} toggle={action("toggle")} />
  </Container>
);

export const Toggle = () => {
  const [active, setActive] = React.useState(false);
  const toggle = e => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <Container>
      <Navbar active={active} toggle={toggle} />
    </Container>
  );
};
