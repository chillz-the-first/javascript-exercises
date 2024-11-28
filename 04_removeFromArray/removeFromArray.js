const removeFromArray = function(array, element, ...rest) {
    let arr = [];

    if (rest.length !== 0) {
        rest.push(element);
        rest.sort();
        for (let i = 0; i < array.length; i++) {
            if (!rest.includes(array[i])) {
                arr.push(array[i]);
            }
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== element) {
                arr.push(array[i]);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
