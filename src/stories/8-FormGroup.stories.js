import React from "react";
import Container from "../components/Container";
import FormGroup from "../components/FormGroup";
import { Select } from "../components/Inputs";
import useFormState from "../components/useFormState";

export default {
  title: "FormGroup",
  component: FormGroup
};

export const SimpleInput = () => (
  <Container>
    <FormGroup label={"Simple Input"} />
  </Container>
);
export const ErrorMessageInput = () => (
  <Container>
    <FormGroup label={"I am wrong"} errorMessage={"Required Field"} />
  </Container>
);
export const CustomInput = () => (
  <Container>
    <FormGroup label={"I am wrong"}>
      <Select>
        <option>Option 1</option>
      </Select>
    </FormGroup>
  </Container>
);

export const UsingForm = () => {
  const { formValues, inputProps, touchAll } = useFormState({
    input1: "",
    input2: ""
  });
  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          touchAll();
          console.log({ formValues });
        }}
      >
        <FormGroup
          label={"First Input"}
          {...inputProps("input1", value => (value ? null : "Required"))}
        />
        <FormGroup
          label={"Second Input"}
          {...inputProps("input2", value => (value ? null : "Required"))}
        />
        <button type={"submit"}></button>
        <pre>{JSON.stringify(formValues, null, 4)}</pre>
      </form>
    </Container>
  );
};
