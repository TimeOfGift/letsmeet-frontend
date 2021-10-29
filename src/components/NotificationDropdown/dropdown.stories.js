import React, { Component } from "react";
import NotificationDropdown from "./index";

const notifications = [
  {
    id: 1,
    img:
      "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png",
    name: "Deborah Oni",
    details: "just created a new event on",
    eventTitle: "Live Jam Group",
    time: "2 mins ago",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Deborah Oni",
    details: "just created a new event on",
    eventTitle: "Live Jam Group",
    time: "5 mins ago",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Deborah Oni",
    details: "just created a new event on",
    eventTitle: "Live Jam Group",
    time: "8 mins ago",
  },
];
export default {
  title: "Event Meet/Dropdown",
  component: NotificationDropdown,
  args: {
    notifications,
  },
};

export const All = (args) => <NotificationDropdown {...args} />;
