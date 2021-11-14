import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/LandindPage";
import SignUp from "./pages/SignUp";
import TopNav from "./components/TopNav";
import Signin from "./pages/SignIn"
import Forgetpassword from "./pages/Password/forgetpassword";
import Resetpassword from "./pages/Password/resetpassword"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <>
          <TopNav />
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/forget-password">
            <Forgetpassword />
          </Route>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route exact path="/reset-password">
            <Resetpassword />
          </Route>
        </>
      </Switch>
    </Router>
  )
}


export default Routes

