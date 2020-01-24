import React from "react";
import FAB from "./FAB";
import { mountWithContext } from "../tests";

it("should render default", () => {
  mountWithContext(<FAB />);
});

it("should render with title and icon", () => {
  const wrapper = mountWithContext(<FAB title={"Custom Icon"} icon={"bars"} />);
  expect(
    wrapper
      .find("button")
      .first()
      .prop("title")
  ).toEqual("Custom Icon");
  expect(wrapper.find("div i.fa-bars").first()).not.toBeNull();
});
