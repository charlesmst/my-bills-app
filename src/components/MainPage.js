import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Card from "./Card";
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
        logo={"My Bills App"}
        menus={[{ title: "Accounts", href: "/accounts" }]}
      />

      <Card>{children}</Card>
    </Container>
  );
}
