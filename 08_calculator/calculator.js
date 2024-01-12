const add = function (...nums) {
  return nums.reduce((sum, current) => sum + current, 0);
};

const subtract = function (num1 = 0, num2 = 0) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i<=num; i++) {
    result = result * i;
  }
  return result;


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
