import React, { Component } from "react";

export default class EVENT_HANDLER extends Component {
  clickFn = () => {
    console.log("Clicked");
  };

  constructor(props) {
    super(props);

    this.state = {
      boxsValue: "",
    };
  }

  onChangeFn = (e) => {
    // console.log(e.target.value);
    this.setState(
      {
        boxsValue: e.target.value,
      },
      () => {
        console.log(this.state.boxsValue);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.clickFn}>Click Here</button>
        <input type="text" onChange={this.onChangeFn}></input>
        <p>{this.state.boxsValue}</p>
      </div>
    );
  }
}
