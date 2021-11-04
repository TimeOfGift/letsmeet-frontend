import React from "react";
import TopNav from "./index";
export default {
  title: "Event Meet/Top Nav",
  component: TopNav,
  
};

export const All = (args) => (
  <div style={{height: '100vh', background: 'grey', width: '100vw'}}>
    <TopNav {...args} />
  </div>
);
