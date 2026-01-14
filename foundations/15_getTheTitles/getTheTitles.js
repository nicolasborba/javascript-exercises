const getTheTitles = function(array) {

  let arrayLength = array.length;

  let bookArray = [];

  for (let x = 0; x <= arrayLength - 1; x++) {

    bookArray.push(array[x].title);

  }

  return bookArray;

// use object.keys e array keys


};


// Do not edit below this line
module.exports = getTheTitles;
