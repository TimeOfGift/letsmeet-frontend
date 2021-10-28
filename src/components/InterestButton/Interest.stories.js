import React, { Component } from "react";
import InterestButton from "./interestButton";

export default {
  title: "Event Meet/InterestButton",
  component: InterestButton,
  args: {
    text: "Swimming",
    handleClick: () => console.log("toggle()"),
  },
};

export const All = (args) => <InterestButton {...args} />;
