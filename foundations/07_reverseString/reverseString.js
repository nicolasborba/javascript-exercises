let reverseResult = '';

const reversePrint = function(charactersLeft, string, reverseResult) {

  if (charactersLeft > 0) {

    reverseResult = reverseResult + string[charactersLeft-1];
    charactersLeft--;
    
    return reversePrint(charactersLeft, string, reverseResult);
    
  } else {
    return reverseResult 
  }
  
}

const reverseString = function(string) {

let stringLength = string.length;
let charactersLeft = stringLength;

return reversePrint(charactersLeft, string, reverseResult);

};


// Do not edit below this line
module.exports = reverseString;
