import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { mountWithContext } from "./tests";

test("renders home page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find("h2").text()).toEqual("Home");
});
