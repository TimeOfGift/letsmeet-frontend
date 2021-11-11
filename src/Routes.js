import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/LandindPage";
import SignUp from "./pages/SignUp";
import TopNav from "./components/TopNav";
import Signin from "./pages/SignIn"
import Forgetpassword from "./pages/forgetpassword/forgetpassword";
import Resetpassword from "./pages/resetpassword/resetpassword"

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
          <Route exact path="/forgetpassword">
            <Forgetpassword />
          </Route>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route exact path="/resetpassword">
            <Resetpassword />
          </Route>
        </>

      </Switch>
    </Router >
  )
}


export default Routes

