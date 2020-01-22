import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import ListView from "../components/ListView";
import Container from "../components/Container";
export default {
  title: "ListView",
  component: ListView
};

const items = [
  { id: 1, title: "Banco 1", initialBalance: 140 },
  { id: 2, title: "Banco 2", initialBalance: 140 },
  { id: 3, title: "Banco 3", initialBalance: 140 },
  { id: 4, title: "Banco 4", initialBalance: 140 }
];
const dafaultProps = { items };
export const TextList = () => (
  <Container>
    <ListView {...dafaultProps} />
  </Container>
);

export const IconList = () => (
  <Container>
    <ListView
      {...dafaultProps}
      items={items.map(x => ({ ...x, icon: <i className="fa fa-bars"></i> }))}
    />
  </Container>
);

export const SecondaryTextList = () => (
  <Container>
    <ListView
      {...dafaultProps}
      items={items.map(x => ({
        ...x,
        icon: <i className="fa fa-bars"></i>,
        secondary: x.title + " text secondary"
      }))}
    />
  </Container>
);

export const CompleteList = () => (
  <Container>
    <ListView
      {...dafaultProps}
      items={items.map(x => ({
        ...x,
        icon: <i className="fa fa-bars"></i>,
        secondary: x.title + " text secondary",
        afterIcon: <i className="fa fa-ellipsis-v"></i>
      }))}
    />
  </Container>
);
