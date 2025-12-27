let multipliedString;

const loopString = function (s, x) {
    if (x > 0) {
    x--;
    multipliedString = multipliedString + s;
    loopString(s, x);
    return multipliedString;
  } else {
    return multipliedString;
  }
  }

const repeatString = function (s, x) {

  if (x >= 0) {
  multipliedString = "";
  return loopString(s, x);
  } else {
    return 'ERROR';
  }
 
};

// Do not edit below this line
module.exports = repeatString;
