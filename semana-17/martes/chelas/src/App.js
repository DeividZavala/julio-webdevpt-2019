import React from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="">
              <NavLink exact to="/" activeClassName="uk-text-bold">
                Lista
              </NavLink>
            </li>
            <li>
              <NavLink to="/detail" activeClassName="uk-text-bold">
                Detalle
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Router />
    </div>
  );
}

export default App;
