import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { fontFamily, fontSize, gray2 } from "../Styles";
import Container from "./Container";
export default function MainPage({ children }) {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
    </Container>
  );
}
