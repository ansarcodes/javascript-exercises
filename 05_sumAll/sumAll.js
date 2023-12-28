const sumAll = function(num1, num2) {
    let result = 0;
    if (num1 < 0 || num2 < 0 || (typeof(num1) !== "number") || (typeof(num2) !== "number")){
        return "ERROR";
    } else if (num1 > num2) {
        let bigger = num1;
        let lesser = num2;
        num1 = lesser;
        num2 = bigger;
    }
    for (let i = num1; i <= num2; i++) {
        if (num1 === num2) {
            return result+num2;
        } else {
            result+= i;
        }
    }
    return result;
    

};
console.log(typeof(typeof(1)));
// console.log(sumAll(1, 1));
// Do not edit below this line
module.exports = sumAll;
