const convertToCelsius = function(temperature) {

  let celsius = +((temperature - 32) * (5/9)).toFixed(1);
  return celsius;

};

const convertToFahrenheit = function(temperature) {

  let farenheit = +(temperature * (9/5) + 32).toFixed(1);
  return farenheit;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
