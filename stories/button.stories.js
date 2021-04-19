import React from "react";
import Home from "../components";

export default {
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

const TemplateWithText = (args) => <Home />;

export const withText = TemplateWithText.bind({});

withText.args = {};
