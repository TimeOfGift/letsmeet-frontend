import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from './components/Modal'
import Home from "./pages/Home/LandindPage";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Modal />
        </Route>
      </Switch>
    </Router >
  )
}


export default Routes

