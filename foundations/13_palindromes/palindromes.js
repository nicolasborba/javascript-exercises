const palindromes = function (string) {

  let noSpecialCharacters = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedString = "";

  let stringLength = noSpecialCharacters.length;

  for (x = stringLength - 1; x >= 0; x--) {

    reversedString += noSpecialCharacters[x];

  }
  
  return reversedString === noSpecialCharacters;

};

// Do not edit below this line
module.exports = palindromes;
