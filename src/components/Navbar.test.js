import React from "react";
import Navbar from "./Navbar";
import { mountWithContext } from "../tests";
const menus = [
  { title: "Home", href: "/" },
  { title: "Hello World", href: "/hello-world" },
  { title: "Signup", href: "/signup", type: "button" },
  { title: "Login", href: "/login", type: "button" }
];
const logo = "Testing App";
const dafaultProps = { active: true, menus, logo };
it("should render logo name", () => {
  const wrapper = mountWithContext(<Navbar {...dafaultProps} />);
  expect(
    wrapper
      .find("li")
      .first()
      .text()
  ).toEqual(logo);
});

it("should render menus", () => {
  const wrapper = mountWithContext(<Navbar {...dafaultProps} />);
  expect(wrapper.find("li.item").length).toEqual(menus.length);
  expect(
    wrapper
      .find("li.item")
      .first()
      .text()
  ).toEqual(menus[0].title);
  expect(
    wrapper
      .find("li.item a")
      .first()
      .prop("href")
  ).toEqual(menus[0].href);
});
it("should render without menus", () => {
  mountWithContext(<Navbar {...dafaultProps} menus={null} />);
});

it("should call toggle on click", () => {
  const toggle = jest.fn();
  const wrapper = mountWithContext(
    <Navbar {...dafaultProps} active={false} toggle={toggle} />
  );
  const toggleElement = wrapper.find(".toggle a").first();
  expect(toggleElement).not.toBeNull();
  toggleElement.simulate("click");
  expect(toggle).toHaveBeenCalledTimes(1);
});
