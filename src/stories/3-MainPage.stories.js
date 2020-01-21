import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import MainPage from "../components/MainPage";
export default {
  title: "MainPage",
  component: MainPage
};

export const MainUsecase = () => <MainPage />;
