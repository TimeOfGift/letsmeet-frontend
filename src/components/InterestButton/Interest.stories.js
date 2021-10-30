import React, { Component } from "react";
import InterestButton from "./interestButton";

export default {
  title: "Event Meet/InterestButton",
  component: InterestButton,
  args: {
    text: "Swimming",
    handleClick: () => true,
    previousInterest: true
  },
};

export const All = (args) => <InterestButton {...args} />;
