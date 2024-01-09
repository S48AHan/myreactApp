import React, { Component } from "react";

export default class Hooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button
          onClick={this.increment}
          disabled={counter === 5 ? true : false}
        >
          increment
        </button>
      </div>
    );
  }
}
