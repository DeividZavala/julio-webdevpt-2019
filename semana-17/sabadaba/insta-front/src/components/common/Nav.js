import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="uk-navbar-container" uk-navbar="true">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li>
          <NavLink to="#">Nombre de usuario</NavLink>
          <div className="uk-navbar-dropdown">
            <ul className="uk-nav uk-navbar-dropdown-nav">
              <li className="uk-active">
                <NavLink to="/profile">Perfil</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="">
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
