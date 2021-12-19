import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    faction: PropTypes.string,
    clickHandler: PropTypes.func
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="C" clickHandler={this.handleClick} quart orange />
          <Button name="+" clickHandler={this.handleClick} quart dark />
          <Button name="-" clickHandler={this.handleClick} quart dark />
          <Button name={this.props.faction} clickHandler={this.handleClick} quart dark />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
        </div>
      </div>
    );
  }
}
