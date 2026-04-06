const reverseString = function(string) {

  let reversedString = '';
  let reverseIndex = 0;

  for (let i = (string.length - 1); i >= 0; i--) {

    reversedString += string[i];
    reverseIndex++;

  }

  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;