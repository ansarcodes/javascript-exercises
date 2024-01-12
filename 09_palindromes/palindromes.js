const palindromes = function (str) {
    result = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return result === result.split("").reverse().join("");
};


// Do not edit below this line
module.exports = palindromes;
