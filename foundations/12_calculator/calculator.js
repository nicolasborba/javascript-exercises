const add = function(a, b) {

  return a + b;
	
};

const subtract = function(m, n) {
	
  return m - n;

};

const sum = function(arraySum) {

  let lengthSum = arraySum.length;

  let resultSum = 0;

  for (let x = lengthSum - 1; x >= 0; x--) {

    resultSum += arraySum[x];

  }

  return resultSum;
	
};

const multiply = function(arrayMultiply) {
  
  let lengthMultiply = arrayMultiply.length;

  let resultMultiply = 1;

  for (let y = lengthMultiply - 1; y >= 0; y--) {

    resultMultiply *= arrayMultiply[y];

  }

  return resultMultiply;

};

const power = function(base, exponent) {

  return base ** exponent;
	
};

const factorial = function(f) {
	
  if (f < 0) {

    return "ERROR"

  } else if (f == 0) {

    return 1;

  } else {

    let factorialResult = f;    

    for (let g = factorialResult - 1; g > 0; g--) {

      factorialResult *= g;

    }

    return factorialResult;

  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
