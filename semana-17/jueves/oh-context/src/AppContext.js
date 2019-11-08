import React, { Component, createContext } from "react";

const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  state = {
    user: { name: "David", age: 22 }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
