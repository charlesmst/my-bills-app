import React from "react";
export default function useFormState(initialValues) {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [touched, setTouched] = React.useState({});
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const inputProps = (name, validate) => {
    return {
      name: name,
      id: name,
      onChange: ({ target: { value } }) => {
        setFormValues({ ...formValues, [name]: value });
      },
      onBlur: ({ target: { value } }) => {
        setTouched({ ...touched, [name]: true });
      },
      value: formValues[name],
      touched: formSubmitted || touched[name],
      errorMessage: validate && validate(formValues[name])
    };
  };
  return {
    formValues,
    inputProps,
    touchAll: () => setFormSubmitted(true)
  };
}
