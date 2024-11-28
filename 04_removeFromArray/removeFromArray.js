const removeFromArray = function(array, element, ...rest) {
    let arr = [];
    rest.push(element);
    rest.sort();
    for (let i = 0; i < array.length; i++) {
        if (!rest.includes(array[i])) {
            arr.push(array[i]);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
