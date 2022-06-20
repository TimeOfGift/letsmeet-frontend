import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <title>Event Meet</title>
      <meta 
      name="description"
      content="Event Meet is a platform for event organizers to create and manage events."
      />
      <meta name="keywords" content="event meet, organizer, create, manage, platform" />
    </Helmet>
    <App />
  </Provider>,
  document.getElementById("root")
);


