let string = 'hey'
let num = 3
let multipliedString = ""

const repeatString = function (s, x) {

  if (x > 0) {
    x--;
    multipliedString = multipliedString + s;
    repeatString(s, x);
    return multipliedString;
  } else {
    return multipliedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
