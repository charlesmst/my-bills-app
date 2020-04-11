import React from "react";
import ChangeMonth from "./ChangeMonth";
import { shallow } from "enzyme";
xit("should match snapshot", () => {
  const wrapper = shallow(
    <ChangeMonth currentDate={new Date(2020, 0, 1, 1, 1, 1)} />
  );
  expect(wrapper).toMatchSnapshot();
});
