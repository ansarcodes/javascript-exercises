const convertToCelsius = function(degreeInFahrenheit) {
  //°C = (°F - 32) × 5/9 formula for conversion
  let degreeInCelcius = (degreeInFahrenheit - 32) * (5/9);
  return Math.round(degreeInCelcius * 10) / 10;

};

const convertToFahrenheit = function(degreeInCelcius) {
  //°F = °C × (9/5) + 32 formula for conversion
  let degreeInFahrenheit = degreeInCelcius * (9/5) + 32;
  return Math.round(degreeInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
