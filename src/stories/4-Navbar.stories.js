import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
export default {
  title: "Navbar",
  component: Navbar
};
const menus = [
  { title: "Home", href: "/" },
  { title: "Hello World", href: "/hello-world" },
  { title: "Signup", href: "/signup", type: "button" },
  { title: "Login", href: "/login", type: "button" }
];
const logo = "Testing App";
const dafaultProps = { active: true, menus, logo };
export const Active = () => (
  <Container>
    <Navbar {...dafaultProps} active={true} toggle={action("toggle")} />
  </Container>
);

export const Inactive = () => (
  <Container>
    <Navbar {...dafaultProps} active={false} toggle={action("toggle")} />
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
      <Navbar {...dafaultProps} active={active} toggle={toggle} />
    </Container>
  );
};
