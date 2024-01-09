import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class STATE extends Component {
  //   render() {
  //     return <div>{(this.props.count = this.props.count + 1)}</div>;
  //   }
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.increment} disabled={count === 5 ? true : false}>
          +
        </button>
        <button onClick={this.decrement} disabled={count === 0 ? true : false}>
          -
        </button>
      </div>
    );
  }
}
