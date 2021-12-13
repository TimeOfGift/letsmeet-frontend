import React from "react";
import Toast from "./index";

export default {
  title: "Event Meet/Toast",
  component: Toast,
  args: {
    type: "error",
    header:'notofication title',
    message: 'Notification message goes here ...'
  },
};

export const myArg = (args) => <Toast {...args} />;
