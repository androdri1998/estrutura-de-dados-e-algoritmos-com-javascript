const { defaultEquals } = require('../../utils')

const DOES_NOT_EXIST = -1;
const sequentialSearch = (array, value, equalsFn = defaultEquals) => {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }

    return DOES_NOT_EXIST;
}

let array = [3, 5, 1, 15, 70, 87, 6, 4, 7, 2];
console.log(array.join());
const position = sequentialSearch(array, 15);
if (position >= 0) {
    console.log(`position: ${position} value: ${array[position]}`);
} else {
    console.log('Value not found!');
}