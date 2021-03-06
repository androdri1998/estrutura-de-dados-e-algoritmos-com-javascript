const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0,
};

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function defaultEquals(a, b) {
    return a === b;
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

const createNonSortedArray = (size) => {
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i);
    }

    return array;
}

const defaultDiff = (a, b) => {
    return a - b;
}

module.exports = {
    Compare,
    defaultCompare,
    swap,
    createNonSortedArray,
    defaultEquals,
    defaultDiff,
}