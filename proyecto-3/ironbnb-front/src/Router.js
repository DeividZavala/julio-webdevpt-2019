import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "~components/auth/Login";
import Signup from "~components/auth/Signup";
import Home from "~components/home/home.js";
import Create from "~components/create/create.js";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/create">
      <Create />
    </Route>
  </Switch>
);

export default Router;
