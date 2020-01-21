import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { fontFamily, fontSize, gray2 } from "../Styles";
import Container from "./Container";
export default function MainPage({ children }) {
  const [navbarActive, setNavbarActive] = React.useState(false);
  const toggle = e => {
    e.preventDefault();
    setNavbarActive(!navbarActive);
  };
  return (
    <Container>
      <Navbar
        active={navbarActive}
        toggle={toggle}
        menus={[{ title: "menu1", href: "/" }]}
      />
      <div>{children}</div>
    </Container>
  );
}
