import React from 'react';
import ShowName from './index';

export default {
  title: "Event Meet/Show Name",
  component: ShowName,
  args:{
    name: 'Hammed'
  }

};

export const Template = (args) => <ShowName {...args} />;
