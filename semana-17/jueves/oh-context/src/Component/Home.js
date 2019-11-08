import React, { Component } from "react";
import { AppContext } from "../AppContext";

export default class Home extends Component {
  static contextType = AppContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { user, addYear } = this.context;
    return (
      <div>
        <div>
          {user.name} tiene {user.age}
          <button onClick={addYear}>Hacer mas ruco</button>
        </div>
      </div>
    );
  }
}
