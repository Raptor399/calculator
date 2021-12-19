import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    dark: PropTypes.bool,
    faction: PropTypes.bool,
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.dark ? "dark" : "",
      this.props.faction ? "faction" : "",
      this.props.orange ? "orange" : "",
      this.props.quart ? "quart" : "",
      this.props.wide ? "wide" : ""
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
