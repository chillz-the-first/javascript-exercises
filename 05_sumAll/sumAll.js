const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 < 0 || num2 < 0 || Number.isNaN(num1) || Number.isNaN(num2) || !Number.isInteger(num1) ||
        !Number.isInteger(num2)) return "ERROR";

    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            sum = sum + i;
        }
        return sum;
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sum = sum + i;
        }
    }

    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
