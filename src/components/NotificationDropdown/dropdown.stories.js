import React, { Component } from "react";
import Dropdown from "./index";

export default {
  title: "Event Meet/Dropdown",
  component: Dropdown,
  args: {
    img:
      "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    name: "Deborah Oni",
    details: "just created a new event on",
    eventTitle: "Live Jam Group",
    time: "8 mins ago",
  },
};

export const All = (args) => <Dropdown {...args} />;
