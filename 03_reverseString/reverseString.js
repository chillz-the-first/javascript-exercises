const reverseString = function(str) {
    let reverseString = "";
    let size = str.length;
    for (let i = size - 1; i >= 0; i--) {
        reverseString += str.at(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
