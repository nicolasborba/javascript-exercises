const fibonacci = function (x) {

  let currentNumber = 0;


  if (x < 0) {

    return "OOPS";

  } else if (x == 0) {

    currentNumber = 0;

  } else if (x <= 2) {

    currentNumber = 1;

  } else {

    let precedingNumberOne = 1;

    let precedingNumberTwo = 1;  

    currentNumber = 1;

    let preIteratingCurrentNumber = currentNumber;

    for (let iterations = 3; iterations <= x; iterations++) {

      preIteratingCurrentNumber = currentNumber;

      currentNumber += precedingNumberOne;

      precedingNumberTwo = precedingNumberOne;

      precedingNumberOne = preIteratingCurrentNumber;

    }

    return currentNumber;

  }

  return currentNumber;

};


// Do not edit below this line
module.exports = fibonacci;
