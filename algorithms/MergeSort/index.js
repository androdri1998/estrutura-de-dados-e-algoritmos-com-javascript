const { defaultCompare, Compare, swap, createNonSortedArray } = require("../../utils");

const merge = (left, rigth, compareFn) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < rigth.length) {
        result.push(compareFn(left[i], rigth[j]) === Compare.LESS_THAN ? left[i++] : rigth[j++]);
    }

    return result.concat(i < left.length ? left.slice(i) : rigth.slice(j));
}

const mergeSort = (array, compareFn = defaultCompare) => {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const rigth = mergeSort(array.slice(middle, length), compareFn);
        array = merge(left, rigth, compareFn);
    }

    return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = mergeSort(array);
console.log(array.join());