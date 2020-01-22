import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { primary1, accent1, fontSize, fontColor1 } from "../Styles";
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
    color: ${fontColor1};
  }
  & > li.item {
    display: ${({ active }) => (active ? "block" : "none")};
    color: ${fontColor1};
    width: 100%;
    text-align: center;
    padding: 15px 5px;
    text-decoration: none;
    font-size: ${fontSize};
  }
  .logo a {
    font-size: 20px;
    text-decoration: none;
    color: ${fontColor1};
  }
  .logo {
    order: 0;
  }
  .toggle {
    order: 1;
    padding: 5px;
    a {
      color: ${fontColor1};
      font-size: 20px;
    }
  }
  .item.button {
    order: 2;
  }
  .item {
    order: 3;
  }

  @media all and (min-width: 900px) {
    & > li.item {
      display: block;
      width: auto;
    }
    .toggle {
      display: none;
    }
    .logo {
      order: 0;
    }
    .item {
      order: 1;
    }
    .button {
      order: 2;
    }
    ul li {
      padding: 15px 10px;
    }
    ul li.button {
      padding-right: 0;
    }
  }
`;
const Menu = ({ href, children, type }) => (
  <li className={type}>
    <Link to={href || "#"}>{children}</Link>
  </li>
);

const Toggle = ({ active, toggle }) => (
  <li className={"toggle"}>
    <a href="/#" onClick={toggle}>
      <i className={"fa " + (!active ? "fa-bars" : "fa-times")}></i>
    </a>
  </li>
);
export default function Navbar({ active, toggle, menus, logo }) {
  return (
    <Nav>
      <MenuList active={active}>
        <Menu type={"logo"}>{logo}</Menu>
        {(menus || []).map(x => (
          <Menu key={x.title} href={x.href} type={"item " + (x.type || "")}>
            {x.title}
          </Menu>
        ))}
        <Toggle active={active} toggle={toggle}></Toggle>
      </MenuList>
    </Nav>
  );
}
