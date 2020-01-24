import React from "react";
import styled from "styled-components";
import { primary1, fontColor1 } from "../Styles";

const FabButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  outline: 0;
  background:#6200ee;// ${primary1};
  position: absolute;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  cursor: pointer;
  
  i{

      color: ${fontColor1};
      font-size: 18px;
  }
  overflow:hidden;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;
export default function FAB({ icon, title }) {
  return (
    <FabButton title={title || "Adicionar"}>
      <i className={"fas fa-" + (icon || "plus")}></i>
    </FabButton>
  );
}
