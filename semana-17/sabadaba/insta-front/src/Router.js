import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Create from "./components/create/create";
import Profile from "./components/profile/profile";

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
    <Route path="/create">
      <Create />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
  </Switch>
);

export default Router;
