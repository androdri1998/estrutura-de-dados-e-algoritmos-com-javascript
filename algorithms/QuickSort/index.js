const { defaultCompare, Compare, swap, createNonSortedArray } = require("../../utils");

const partition = (array, left, right, compareFn) => {
    const pivot = array[Math.floor((right + left) / 2)];

    let i = left;
    let j = right;
    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

const quick = (array, left, right, compareFn) => {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn);
        }
        if (index < right) {
            quick(array, index, right, compareFn);
        }
    }

    return array;
}

const quickSort = (array, compareFn = defaultCompare) => {
    return quick(array, 0, array.length - 1, compareFn);
}

let array = [3, 5, 1, 6, 4, 7, 2];
console.log(array.join());
array = quickSort(array);
console.log(array.join());

module.exports = { quickSort };