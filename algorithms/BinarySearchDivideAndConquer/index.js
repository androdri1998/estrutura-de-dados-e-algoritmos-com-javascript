const { defaultCompare, Compare } = require('../../utils');
const { quickSort } = require('../QuickSort');

const DOES_NOT_EXIST = -1;
const binarySearchRecursive = (array, value, low, high, compareFn = defaultCompare) => {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        } else {
            return mid;
        }
    }

    return DOES_NOT_EXIST;
}

const binarySearch = (array, value, compareFn = defaultCompare) => {
    const sortedArray = quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
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