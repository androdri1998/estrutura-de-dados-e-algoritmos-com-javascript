const { Compare, defaultCompare, swap, createNonSortedArray } = require('../../utils');

const bubbleSort = (array, compareFn = defaultCompare) => {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = bubbleSort(array);
console.log(array.join());

const modifiedBubbleSort = (array, compareFn = defaultCompare) => {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}

let array2 = createNonSortedArray(5);
console.log('------------------')
console.log(array2.join());
array2 = modifiedBubbleSort(array2);
console.log(array2.join());