import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./components/List";
import Detail from "./components/Detail";

const Router = () => (
  <Switch>
    <Route exact path="/" component={List} />
    <Route path="/detail/:id" component={Detail} />
  </Switch>
);

export default Router;
