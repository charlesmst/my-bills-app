import { shallow } from "enzyme";
import React from "react";
import FormGroup from "./FormGroup";

it("should render default", () => {
  shallow(<FormGroup />);
});

it("should render with error message", () => {
  const wrapper = shallow(<FormGroup errorMessage={"error"} />);

  expect(
    wrapper
      .find("ErrorMessage")
      .first()
      .text()
  ).toEqual("error");
});

it("should render custom children", () => {
  const wrapper = shallow(
    <FormGroup>
      <input name="customInput" />
    </FormGroup>
  );
  expect(wrapper.find('input[name="customInput"]').length).toBe(1);
});
it("should render default as input", () => {
  const wrapper = shallow(<FormGroup></FormGroup>);
  expect(wrapper.find("Input").length).toBe(1);
});
it("should show label", () => {
  const wrapper = shallow(<FormGroup label={"My Label"}></FormGroup>);
  expect(wrapper.find("Label").text()).toEqual("My Label");
});
