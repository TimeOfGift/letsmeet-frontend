import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/LandindPage";
import SignUp from "./pages/SignUp";
import TopNav from "./components/TopNav";
import Signin from "./pages/SignIn"

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
          <Route exact path="/login">
            <Signin />
          </Route>
        </>
      </Switch>
    </Router >
  )
}


export default Routes

