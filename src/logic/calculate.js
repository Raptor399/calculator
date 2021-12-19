import Big from "big.js";

import isNumber from "./isNumber";

function elevationFromDistance(obj, distance) {
  if (distance === null) {
    return null;
  }

  const dist = parseFloat(distance);

  if (dist >= 100 && dist <= 1600) {
      if (obj.faction === null || obj.faction === "USA" || obj.faction === "GER") {
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

  return null;
}

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
  if (buttonName === "USA") {
    return {faction: "GER"};
  } else if (buttonName === "GER") {
    return {faction: "RUS"};
  } else if (buttonName === "RUS") {
    return {faction: "USA"};
  }

  if (buttonName === "C") {
    return {
      total: null,
      next: null,
      distance: null
    };
  }

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

  // if (buttonName === "%") {
  //   if (obj.operation && obj.next) {
  //     const result = operate(obj.total, obj.next, obj.operation);
  //     return {
  //       total: Big(result)
  //         .div(Big("100"))
  //         .toString(),
  //       next: null,
  //       operation: null,
  //     };
  //   }
  //   if (obj.next) {
  //     return {
  //       next: Big(obj.next)
  //         .div(Big("100"))
  //         .toString(),
  //     };
  //   }
  //   return {};
  // }

  // if (buttonName === ".") {
  //   if (obj.next) {
  //     // ignore a . if the next number already has one
  //     if (obj.next.includes(".")) {
  //       return {};
  //     }
  //     return { next: obj.next + "." };
  //   }
  //   return { next: "0." };
  // }

  // if (buttonName === "=") {
  //   if (obj.next && obj.operation) {
  //     return {
  //       total: operate(obj.total, obj.next, obj.operation),
  //       next: null,
  //       operation: null,
  //     };
  //   } else {
  //     // '=' with no operation, nothing to do
  //     return {};
  //   }
  // }

  // if (buttonName === "+/-") {
  //   if (obj.next) {
  //     return { next: (-1 * parseFloat(obj.next)).toString() };
  //   }
  //   if (obj.total) {
  //     return { total: (-1 * parseFloat(obj.total)).toString() };
  //   }
  //   return {};
  // }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  // if (obj.operation) {
  //   return {
  //     total: operate(obj.total, obj.next, obj.operation),
  //     next: null,
  //     operation: buttonName,
  //   };
  // }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  // if (!obj.next) {
  //   return { operation: buttonName };
  // }

  // save the operation and shift 'next' into 'total'
  // return {
  //   total: obj.next,
  //   next: null,
  //   operation: buttonName,
  // };
}
