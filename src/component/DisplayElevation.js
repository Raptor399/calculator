import React from "react";
import PropTypes from "prop-types";

import "./DisplayElevation.css";

function elevationFromDistance(distance, faction) {
  if (distance === null) {
    return 0;
  }

  const dist = parseFloat(distance);

  if (dist >= 100 && dist <= 1600) {
      if (faction === null || faction === "USA" || faction === "GER") {
        const m = -0.23703;
        const b = 1001.46;
        return Math.round( m * dist + b );
      } else {
        const m = 21.33;
        const b = 100;
        //Formula by sleepybjr
        return Math.round( 1120 - (((dist / b) - 1) * m)) ;
      }
  }

  return 0;
}

export default class DisplayElevation extends React.Component {
  static propTypes = {
    faction: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    const elevation = elevationFromDistance(this.props.value, this.props.faction);

    
    return (
      <div className="component-display-elevation">
        <div className="label">Elevation</div>
        <div className="value">{elevation}</div>
      </div>
    );
  }
}
