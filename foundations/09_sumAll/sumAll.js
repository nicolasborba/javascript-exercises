const sumAll = function (a, b) {

  let result = 0;


  if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {




    if (a < b) {

      result += b;

      for (x = a; x <= b - 1; x++) {

        result += x;

      }

    } else {

      result += a;

      for (x = b; x <= a - 1; x++) {

        result += x;

      }

    }
  } else {

    result = "ERROR";
    return result;

  }

  return result;


};

// Do not edit below this line
module.exports = sumAll;
