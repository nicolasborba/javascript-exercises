

const removeFromArray = function (...args) {

  let originalArray = args[0];

  let filteredArray = originalArray;

  let itemsToRemove = args.toSpliced(0, 1);

  let originalLength = originalArray.length;

  let removeLength = itemsToRemove.length;


  const filterItems = function (filteredArray, itemsToRemove, originalLength, removeLength) {


    for (let i = originalLength - 1; i >= 0; i--) {

      for (let n = removeLength - 1; n >= 0; n--) {

        if (filteredArray[i] === itemsToRemove[n]) {      
          filteredArray.splice(i, 1);
        }

    }

    }
    // CONTINUE AQUI COMO EM "FILTERING INVALID OBJECTS FROM AN ARRAY OF OBJECTS"
    return filteredArray;
  }

  filterItems(filteredArray, itemsToRemove, originalLength, removeLength);
  return filteredArray;
  


  // const result = itemsToRemove.filter((item));


  //  need to add the .includes parameter, from Searching in array, see in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#searching_in_array

};

// testing
// let finalResult = removeFromArray([6, 2, 3, 2, 1, 3, 5], 1, 2, 3);

// testing


// array.arguments.length = length of them
// array.arguments[0] = first argument, and so on

// considera usar array.filter() , parece ja filtrar pra fora items que eu queria. pode talvez pular ter que usar o indexOf() e o splice() e fazer tudo em um passo so com filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//usa array.indexOf() pra achar o indice na array de cada argumento passado
// obs: considerando que pode ter mais de um e indexOf() so acha o primeiro, precisa re-run o indexOf() com o index do ultimo achado +1, assim ele procura dali pra frente, ate retornar -1 (nao existe)
// obs: se resultado for -1, nao existe
// obs: exemplo excelente de como achar o indice pra todos os argumentos incluindo repetidos: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_all_the_occurrences_of_an_element 

// usa array.splice() (our array.toSpliced() caso tenha problema alterar a array original) pra remover os itens necessarios nos indexes que achar eles
// 

// Do not edit below this line
module.exports = removeFromArray;
