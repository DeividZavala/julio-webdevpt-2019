import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Profile from "./Component/Profile";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);

export default Router;
