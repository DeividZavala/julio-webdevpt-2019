import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
  </Switch>
);

export default Router;
