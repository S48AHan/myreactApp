import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.desc}</h3>
      </div>
    );
  }
}

export default Card2;
