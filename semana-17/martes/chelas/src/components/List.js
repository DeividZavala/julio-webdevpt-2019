import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBeers } from "../services/beers";

class List extends Component {
  state = {
    results: undefined
  };

  componentWillMount() {}

  render() {
    console.log(this.props.location);
    const { results } = this.state;
    return (
      <div>
        {results ? (
          <div>
            <table className="uk-table">
              <caption>List of beers</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Yeast</th>
                  <th>Abv</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {results.map((beer, index) => (
                  <tr key={index}>
                    <td>{beer.name}</td>
                    <td>{beer.ingredients.yeast}</td>
                    <td>{beer.abv}</td>
                    <td>
                      <Link to={`/detail/${beer.id}`}>see beer</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>Cargando</h2>
        )}
      </div>
    );
  }

  componentDidMount() {
    getBeers().then(res => {
      this.setState({ results: res.data });
    });
  }

  componentWillUnmount() {}
}

export default List;
