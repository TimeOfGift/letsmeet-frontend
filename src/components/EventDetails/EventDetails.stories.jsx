import React from 'react';
import EventDetails from './EventDetails';

export default {
  title: "Event Meet/Event Details",
  component: EventDetails,
  args: {
    event: {
      title: "Description",
      text1: "Hi",
      text2: "Hello",
      attendant: "Obogowire CodeLord, Ubani Machine",
      tags: "#python #meetup #tech #coding #lipsum",
      img:
        "data:image/jpeg;base64,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",
    },
  },
};
  
  export const Template = (args) => <EventDetails {...args} />;