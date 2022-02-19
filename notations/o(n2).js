// example notation O(n²)
const { Compare, defaultCompare, swap } = require('../utils');

const bubbleSort = (array, compareFn = defaultCompare) => {
    const { length } = array;
    let cost = 0;
    for (let i = 0; i < length; i++) {
        cost++;
        for (let j = 0; j < length - 1; j++) {
            cost++;
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }

    console.log(`Const for sequentialSearch with input size ${array.length} is ${cost}`);

    return array;
}

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));