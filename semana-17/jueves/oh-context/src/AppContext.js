import React, { Component, createContext } from "react";

export const AppContext = createContext();

export default class AppProvider extends Component {
  state = {
    user: { name: "David", age: 22 },
    characters: {},
    currentCharacter: {}
  };

  setCurrentCharacter = character => {
    this.setState({ currentCharacter: character });
  };

  setCharacters = characters => {
    console.log("context", characters);
    characters = [...characters].reduce((acc, character) => {
      return { ...acc, [character.id]: character };
    }, {});
    this.setState({ characters });
  };

  addYear = () => {
    const { user } = this.state;
    user.age++;
    this.setState({ user });
  };

  render() {
    const { addYear, setCharacters, setCurrentCharacter } = this;
    return (
      <AppContext.Provider
        value={{ ...this.state, addYear, setCharacters, setCurrentCharacter }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
