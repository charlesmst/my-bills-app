import React from "react";
import styled from "styled-components";
import { primary1, secondary1, accent1, fontSize } from "../Styles";
const Nav = styled.nav`
  width: 100%;
  background: ${primary1};
  margin: 0;
  color: ${accent1};
`;
const MenuList = styled.ul`
  list-style-type: none;
  padding: 5px 20px;
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  & > li.item {
    display: ${({ active }) => (active ? "block" : "none")};
    color: white;
    width: 100%;
    text-align: center;
    padding: 15px 5px;
    text-decoration: none;
    font-size: ${fontSize};
  }
  .logo a {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }
  .logo {
    order: 0;
  }
  .toggle {
    order: 1;
    padding: 5px;
    a {
      color: ${secondary1};
      font-size: 20px;
    }
  }
  .item.button {
    order: 2;
  }
  .item {
    order: 3;
  }
`;
const Menu = ({ href, children, type }) => (
  <li className={type}>
    <a href={href || "#"}>{children}</a>
  </li>
);

const ToggleLi = styled.li`
  color: white;
`;
const Toggle = ({ active, toggle }) => (
  <li className={"toggle"}>
    <a href="#" onClick={toggle}>
      <i className={"fa " + (!active ? "fa-bars" : "fa-times")}></i>
    </a>
  </li>
);
export default function Navbar({ active, toggle }) {
  return (
    <Nav>
      <MenuList active={active}>
        <Menu type={"logo"}>My bills App</Menu>
        <Menu type={"item"}>Example1</Menu>
        <Menu type={"item"}>Example1</Menu>
        <Menu type={"item button"}>Login</Menu>
        <Menu type={"item button"}>Signup</Menu>
        <Menu type={"item"}>Example2</Menu>
        <Menu type={"item"}>Example3</Menu>
        <Toggle active={active} toggle={toggle}></Toggle>
      </MenuList>
    </Nav>
  );
}
