import React from "react";
import styled from "styled-components";
import Card from "./Card";
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  position: relative;
  padding-inline-start: 0;
  background: #fff;
  & > li {
    position: relative;
    overflow: hidden;
    transition: background 0s;
    padding: 12px 10px;
    display: flex;
    transition: 0.3s ease-in;
    align-items: center;
    border-bottom: 1px solid #ddd;
    .icon {
      order: 0;
      padding: 0 5px;
    }
    .container-central {
      order: 1;
      flex-grow: 1;
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      & > div {
        display: flex;
      }

      .secondary {
        padding-top: 3px;
        color: #888;
        font-size: 13px;
      }
    }
    .after-icon {
      order: 2;
    }
    &:hover {
      background: #eee radial-gradient(circle, transparent 1%, #eee 1%)
        center/15000%;
    }
  }

  & > li:after {
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

  & > li:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

export default function ListView({ items }) {
  return (
    <Card padding={0}>
      <Ul>
        {items.map(x => (
          <li key={x.id}>
            {x.icon && <div className={"icon"}>{x.icon}</div>}
            {x.afterIcon && <div className={"after-icon"}>{x.afterIcon}</div>}
            <div className={"container-central"}>
              {x.title && <div className={"title"}>{x.title}</div>}
              {x.secondary && <div className={"secondary"}>{x.secondary}</div>}
            </div>
          </li>
        ))}
      </Ul>
    </Card>
  );
}
