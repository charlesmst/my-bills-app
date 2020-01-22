import React from "react";
import ListView from "./ListView";
import { mountWithContext } from "../tests";
const items = [
  { id: 1, title: "Home" },
  { id: 2, title: "Hello World" },
  { id: 3, title: "Signup" },
  { id: 4, title: "Login" }
];

const dafaultProps = { items };

it("should render items", () => {
  const wrapper = mountWithContext(<ListView {...dafaultProps} />);
  expect(wrapper.find("li").length).toEqual(items.length);
  expect(
    wrapper
      .find("li")
      .first()
      .text()
  ).toEqual(items[0].title);
});

it("should show secondary text", () => {
  const itemsWithSecondary = items.map(x => ({
    ...x,
    secondary: x.title + " secondary"
  }));
  const wrapper = mountWithContext(
    <ListView {...dafaultProps} items={itemsWithSecondary} />
  );
  expect(wrapper.find("li").length).toEqual(items.length);
  expect(
    wrapper
      .find("li .secondary")
      .first()
      .text()
  ).toEqual(itemsWithSecondary[0].secondary);
});

it("should show icon right", () => {
  const itemsWithIcon = items.map(x => ({
    ...x,
    icon: <i className={"icon-example"}>content</i>
  }));
  const wrapper = mountWithContext(
    <ListView {...dafaultProps} items={itemsWithIcon} />
  );
  expect(
    wrapper
      .find("li .icon-example")
      .first()
      .text()
  ).toEqual("content");
});

it("should show icon left", () => {
  const itemsWithAfterIcon = items.map(x => ({
    ...x,
    afterIcon: <i className={"icon-example"}>content</i>
  }));
  const wrapper = mountWithContext(
    <ListView {...dafaultProps} items={itemsWithAfterIcon} />
  );
  expect(
    wrapper
      .find("li .icon-example")
      .first()
      .text()
  ).toEqual("content");
});
