import React, { Component } from "react";

export default class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} disabled={count === 5 ? true : false}>
          Increase
        </button>
      </div>
    );
  }
}
