import React from "react";
import EventCard from "./index";
import img from '../../images/group.jpg'
export default {
  title: "Event Meet/Event Card",
  component: EventCard,
  args: {
    event: {
      title: "Swimming Meetup",
      tags: ["python", "meetup", "tech"],
      date: new Date(),
      img
    },
  },
};

export const Template = (args) => <EventCard {...args} />;
