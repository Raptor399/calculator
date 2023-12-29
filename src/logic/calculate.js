import isNumber from "./isNumber";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  // Faction rotate button from USA to GBR to GER to RUS
  if (buttonName === "USA") {
    return {faction: "GBR"};
  } else if (buttonName === "GBR") {
    return {faction: "GER"};
  } else if (buttonName === "GER") {
    return {faction: "RUS"};
  } else if (buttonName === "RUS") {
    return {faction: "USA"};
  }

  // Clear button
  if (buttonName === "C") {
    return {
      total: null,
      next: null,
      distance: null
    };
  }

  // Number buttons
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.distance === "0") {
      // Don't change anything when entering consecutive zeroes
      return {};
    }

    let newDistance;

    if (obj.distance === null || obj.distance === "0") {
      // Replace leading zero
      newDistance = buttonName;
    } else {
      // Allow a maximum of 4 digits
      if (obj.distance.length < 4) {
        // Concatenate button to existing number
        newDistance = obj.distance + buttonName;
      } else {
        // Ignore button and keep the same distance
        newDistance = obj.distance;
      }
    }

    return {
      distance: newDistance,
      total: null,
    };
  }

  if (buttonName === "+") {
    // Increase distance by 1
    let newDistance;
    
    if (obj.distance === null) {
      newDistance = "1";
    } else if (parseInt(obj.distance) < 9999) {
      newDistance = (parseInt(obj.distance) + 1).toString();
    } else {
      newDistance = obj.distance;
    }

    return {
      distance: newDistance
    };
  }

  if (buttonName === "-") {
    // Decrease distance by 1
    let newDistance = (obj.distance === null || obj.distance === "1") ? null : (parseInt(obj.distance) - 1).toString();

    return {
      distance: newDistance
    };    
  }
}
