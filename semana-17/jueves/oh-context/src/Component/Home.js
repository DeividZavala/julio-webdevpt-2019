import React, { Component } from "react";
import { AppContext } from "../AppContext";
import { getCharacters } from "../services/characters";
import { Link } from "react-router-dom";

export default class Home extends Component {
  static contextType = AppContext;

  componentDidMount() {
    const { characters } = this.context;
    if (!Object.values(characters).length) {
      getCharacters().then(res => {
        this.context.setCharacters(res.data.results);
      });
    }
  }

  render() {
    const { characters } = this.context;
    return (
      <div>
        <ul>
          {Object.values(characters).map((character, index) => (
            <li key={index}>
              {character.name}{" "}
              <Link to={`/profile/${character.id}`}>Detalle</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
