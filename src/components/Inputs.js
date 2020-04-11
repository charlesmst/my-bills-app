import styled from "styled-components";
// import InputMaskWrapped from "react-input-mask";

const commonStyle = `
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #fff;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  width: 100%;
  padding: .6rem .75rem;
`;
export const Input = styled.input`
  ${commonStyle}
`;
Input.displayName = "Input";
export const Select = styled.select`
  ${commonStyle}
`;
Select.displayName = "Select";

// export const InputMask = styled(InputMaskWrapped)`
//   ${commonStyle}
// `;
