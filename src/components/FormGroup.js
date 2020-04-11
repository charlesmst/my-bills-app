import React from "react";
import styled from "styled-components";
import { Input } from "./Inputs";
import { error1, primary1, fontSize, fontSizeSmall } from "../Styles";

const Label = styled.label`
  display: block;
  color: ${primary1};
  font-size: ${fontSize};
  font-weight: bold;
  margin-bottom: 0.25rem;
`;
Label.displayName = "Label";
const FormDiv = styled.div`
  position: relative;
  input,
  select {
    margin-bottom: 1em;
  }
  ${({ invalid }) =>
    invalid
      ? `
      input, select{
        border: 1px solid ${error1};
      }
      ${Label}{
          color: ${error1};
      }
  `
      : null}
`;
const ErrorMessage = styled.div`
  color: ${error1};
  position: absolute;
  top: 42px;
  font-size: ${fontSizeSmall};

  ${({ visible }) =>
    visible
      ? `
      display:block;
      visibility:visible;
  `
      : `
      
      display:none;
      visibility:hidden;`};
`;
ErrorMessage.displayName = "ErrorMessage";
const ErrorWrapper = styled.div`
  position: relative;
`;
export default function FormGroup({ label, children, errorMessage, ...props }) {
  return (
    <FormDiv invalid={!!errorMessage}>
      <Label>{label}</Label>
      <ErrorWrapper>
        {children || <Input {...props} />}
        <ErrorMessage visible={!!errorMessage}>{errorMessage}</ErrorMessage>
      </ErrorWrapper>
    </FormDiv>
  );
}
