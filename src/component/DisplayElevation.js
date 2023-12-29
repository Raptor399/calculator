import React from "react";
import PropTypes from "prop-types";

import "./DisplayElevation.css";
import "../logic/calculate";

export default class DisplayElevation extends React.Component {
  static propTypes = {
    faction: PropTypes.oneOf(['USA', 'GBR', 'GER', 'RUS']).isRequired,
    value: PropTypes.string
  };

  elevationFromDistance(distance, faction) {
    if (distance === null) {
      return null;
    }
  
    const dist = parseFloat(distance);
  
    if (dist >= 100 && dist <= 1600) {
      let shortest_dist = 100;
      let shortest_elev = 533;
      let longest_dist = 1600;
      let longest_elev = 267;
  
      // Gun elevations from the game
      if (faction === "GBR") {
        shortest_dist = 100;
        shortest_elev = 533;
        longest_dist = 1600;
        longest_elev = 267;
      } else if (faction === "RUS") {
        shortest_dist = 100;
        shortest_elev = 1120;
        longest_dist = 1600;
        longest_elev = 800;
      } else {
        // Default to USA or GER
        shortest_dist = 100;
        shortest_elev = 978;
        longest_dist = 1600;
        longest_elev = 622;
      }
  
      // Solve linear equation
      const m = (longest_elev - shortest_elev) / (longest_dist - shortest_dist);
      const c = shortest_elev - (m * shortest_dist);
  
      return Math.round(m * dist + c);
    }
  
    return null;
  };

  render() {
    const elevation = this.elevationFromDistance(this.props.value, this.props.faction);

    
    return (
      <div className="component-display-elevation">
        <div className="value">{elevation}</div>
        <div className="label">Elevation</div>
      </div>
    );
  }
}
