import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/LandindPage";
import SignUp from "./pages/SignUp";
import TopNav from "./components/TopNav";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <>
          <TopNav/>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        </>
      </Switch>
    </Router >
  )
}


export default Routes

