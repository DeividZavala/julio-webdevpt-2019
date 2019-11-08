import React, { Component } from "react";
import { AppContext } from "../AppContext";

export default class Home extends Component {
  static contextType = AppContext;
  render() {
    const { user } = this.context;
    return (
      <div>
        <div>
          {user.name} tiene {user.age}
        </div>
      </div>
    );
  }
}
