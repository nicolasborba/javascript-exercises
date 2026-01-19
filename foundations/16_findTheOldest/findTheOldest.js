const findTheOldest = function (array) {

  // -> receive an array, go down one level and make a "for" that gets the objects inside it (and goes through all objects)

  let arrayLength = array.length;

  let iteratingObject;

  let iteratingYearOfBirth;

  let birthsArray = [];

  let deathsArray = [];

  let iteratingYearOfDeath;

  let age;

  let agesArray = [];

  let oldestAge;

  let oldestPersonIndex;


  for (let x = 0; x <= arrayLength - 1; x++) {

    iteratingObject = array[x];


    // -> establish a variable that pulls yearOfBirth of each object, and also yearOfDeath
    iteratingYearOfBirth = iteratingObject.yearOfBirth;

    birthsArray.push(iteratingYearOfBirth);

    // -> however set it that, if there's no yearOfDeath, it should use 2026 as reference

    if (Object.hasOwn(iteratingObject, 'yearOfDeath')) {

      iteratingYearOfDeath = iteratingObject.yearOfDeath;

    } else {

      iteratingYearOfDeath = 2025;

    }

    deathsArray.push(iteratingYearOfDeath);

    // -> establish a variable for age that is yearOfDeath MINUS yearOfBirth

    age = iteratingYearOfDeath - iteratingYearOfBirth;

    // -> establish a new array for ages and push that variable age to the array. do this for each object in the initially received array

    agesArray.push(age);



  }

  // -> find the highest value inside that array

  oldestAge = Math.max(...agesArray);

  // -> get the index of the highest value inside the array, and that will be the index of the object we want to pass as a result

 for (let y = 0; y <= arrayLength - 1; y++) {

    if (agesArray[y] == oldestAge) {

      oldestPersonIndex = y;

    }

  }

  return array[oldestPersonIndex];


};

// Do not edit below this line
module.exports = findTheOldest;



