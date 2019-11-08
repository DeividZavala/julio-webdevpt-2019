import React, { Component, createContext } from "react";

export const AppContext = createContext();

export default class AppProvider extends Component {
  state = {
    user: { name: "David", age: 22 },
    products: [{ name: "control", brand: "sony" }]
  };

  addYear = () => {
    const { user } = this.state;
    user.age++;
    this.setState({ user });
  };

  render() {
    const { addYear } = this;
    return (
      <AppContext.Provider value={{ ...this.state, addYear }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
