import React, { Component } from "react";
import { AppContext } from "../AppContext";
import { getCharacter } from "../services/characters";

export default class Home extends Component {
  static contextType = AppContext;
  componentWillMount() {
    const { characters } = this.context;
    const { id } = this.props.match.params;
    if (!characters[id]) {
      getCharacter(id).then(res => {
        this.context.setCurrentCharacter(res.data);
      });
    } else {
      this.context.setCurrentCharacter(characters[id]);
    }
  }
  render() {
    const { currentCharacter } = this.context;
    return (
      <div>
        <div>{currentCharacter.name}</div>
      </div>
    );
  }
}
