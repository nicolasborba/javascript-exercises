const sumAll = function (a, b) {

  let sum = 0;
  let lowest;
  let highest;

  // determine if a > b or b > a, to decide the order

  if (!Number.isInteger(a)
    || !Number.isInteger(b)
    || a <= 0
    || b <= 0) {
    return "ERROR";
  }

  if (a > b) {

    lowest = b;
    highest = a;

  } else if (b > a) {

    lowest = a;
    highest = b;

  } else {

    return a;

  }

  // loop from the lower while it is lower or equal

  for (lowest; lowest <= highest; lowest++) {

    sum += lowest;

  }

  // ++ the lower after each iteration
  // sum the lower to the `sum` var

  return sum;

};

// Do not edit below this line
module.exports = sumAll;