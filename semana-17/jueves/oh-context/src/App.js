import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </nav>
        <Router />
      </div>
    );
  }
}

export default App;
