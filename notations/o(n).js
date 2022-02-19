// example notation O(n)
const { defaultEquals } = require('../utils');

const sequentialSearch = (array, value, equalsFn = defaultEquals) => {
    let cost = 0;
    for (let i = 0; i < array.length; i++) {
        cost++;
        if (equalsFn(value, array[i])) {
            console.log(`Const for sequentialSearch with input size ${array.length} is ${cost}`);
            return i;
        }
    }

    console.log(`Const for sequentialSearch with input size ${array.length} is ${cost}`);

    return -1;
}

console.log(sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
