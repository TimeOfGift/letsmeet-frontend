import React, { Component } from "react";
import Button from "./index";

export default {
  title: "Event Meet/Button",
  component: Button,
  args: {
    className: "",
    text: "Login",
    handleClick: () => console.log("Hello"),
  },
};

export const All = (args) => <Button {...args} />;
