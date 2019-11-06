import React, { Component } from "react";
import { getBeer } from "../services/beers";

class Detail extends Component {
  state = {
    beer: {}
  };

  render() {
    console.log(this.props);
    const { beer } = this.state;
    return (
      <div>
        <h1>{beer.name}</h1>
        <div className="uk-width-1-2">
          <img src={beer.image_url} alt="" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getBeer(id).then(res => {
      console.log(res.data);
      this.setState({ beer: res.data[0] });
    });
  }
}

export default Detail;
