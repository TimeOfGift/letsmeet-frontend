import React, { Component } from "react";
import NotificationDropdown from "./index";
import { notifications} from './dummydata'

export default {
  title: "Event Meet/Dropdown",
  component: NotificationDropdown,
  args: {
    notifications,
  },
};

export const All = (args) => <NotificationDropdown {...args} />;
