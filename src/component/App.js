import React from "react";
import DisplayDistance from "./DisplayDistance";
import DisplayElevation from "./DisplayElevation";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    distance: null,
    elevation: null,
    faction: "USA"
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <div>
          <DisplayDistance value={this.state.distance || "0"} />
          <DisplayElevation value={this.state.distance || "0"} faction={this.state.faction} />
        </div>
        <ButtonPanel clickHandler={this.handleClick} faction={this.state.faction} />
      </div>
    );
  }
}
