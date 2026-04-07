const removeFromArray = function(array) {

  let resultArray = array;

  for (let i = 1; i < arguments.length; i++) {

    //search for arguments[i] in array

    for (item of array) {

      let foundIndex = resultArray.findIndex(item => item === arguments[i]);

    if ((foundIndex) != -1) {

        //if find, splice removing that element

        resultArray.splice(foundIndex, 1);

    }

    }

   
    

  }

  return resultArray;

};

// Do not edit below this line
module.exports = removeFromArray;