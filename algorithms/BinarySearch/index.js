const { defaultCompare, Compare } = require('../../utils');
const { quickSort } = require('../QuickSort');

const lesserOrEquals = (a, b, compareFn) => {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

const DOES_NOT_EXIST = -1;
const binarySearch = (array, value, compareFn = defaultCompare) => {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return DOES_NOT_EXIST;
}


console.log(`----------------------------------------------------`);
let array = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(array.join());
const position = binarySearch(array, 2);
if (position >= 0) {
    console.log(`position: ${position} value: ${array[position]}`);
} else {
    console.log('Value not found!');
}