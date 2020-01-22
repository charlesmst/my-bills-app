import React from "react";
import styled from "styled-components";
import { card1, fontColorCard1 } from "../Styles";

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: ${({ margin }) =>
    typeof margin !== "undefined" ? margin : "0 auto"};
  background: ${card1};
  color: ${fontColorCard1};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin-top: 10px;
  & > div {
    padding: ${({ padding }) =>
      typeof padding !== "undefined" ? padding : "2px 16px"};
  }
`;
export default function Card({ children, padding }) {
  return (
    <ContentWrapper padding={padding}>
      <div>{children}</div>
    </ContentWrapper>
  );
}
