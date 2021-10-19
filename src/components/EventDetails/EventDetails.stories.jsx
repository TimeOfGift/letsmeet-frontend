import React from 'react';
import EventDetails from './EventDetails';

export default {
    title: "Event Meet/Event Details",
    component: EventDetails,
    args:{
        event: {
        title: 'Description',
        text1: 'Hi',
        text2: 'Hello',
        attendant: 'Obogowire CodeLord, Ubani Machine',
        tags: '#python #meetup #tech #coding #lipsum',
        img:'https://tokkahub.com/wp-content/uploads/2020/11/google-pixel-4a.jpg'
        }
    }
  
  };
  
  export const Template = (args) => <EventDetails {...args} />;