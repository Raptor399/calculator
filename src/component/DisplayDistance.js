import React from "react";
import PropTypes from "prop-types";

import "./DisplayDistance.css";

export default class DisplayDistance extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display-distance">
        <div className="label">Distance</div>
        <div className="value">{this.props.value}</div>
      </div>
    );
  }
}
