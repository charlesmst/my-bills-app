import React from "react";
import { MemoryRouter } from "react-router-dom";
import Container from "./components/Container";
import { mount } from "enzyme";
export default function ContextTests({ children }) {
  return (
    <Container>
      <MemoryRouter>{children}</MemoryRouter>
    </Container>
  );
}

export function mountWithContext(component) {
  return mount(<ContextTests>{component}</ContextTests>);
}
