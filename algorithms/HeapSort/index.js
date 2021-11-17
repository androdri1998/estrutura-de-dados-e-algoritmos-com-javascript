const { swap, Compare, defaultCompare } = require("../../data-structures/MinHeap/util");

function getLeftIndex(index) {
    return 2 * index + 1;
}

function getRightIndex(index) {
    return 2 * index + 2;
}

function heapify(array, index, heapSize, compareFn) {
    let element = index;
    const left = getLeftIndex(index);
    const right = getRightIndex(index);
    const size = heapSize;
    if (left < size && compareFn(array[element], array[left]) === Compare.BIGGER_THAN) {
        element = left;
    }

    if (right < size && compareFn(array[element], array[right]) === Compare.BIGGER_THAN) {
        element = right;
    }

    if (index !== element) {
        swap(array, index, element);
        heapify(array, element, size, compareFn);
    }
}

function buildMaxHeap(array, compareFn) {
    for (let index = Math.floor(array.length / 2); index >= 0; index -= 1) {
        heapify(array, index, array.length, compareFn);
    }

    return array;
}

function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);

    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }

    return array;
}

const array = [7, 6, 3, 5, 4, 1, 2];
console.log('Before Sorting: ', array);
console.log('After Sorting: ', heapSort(array));


