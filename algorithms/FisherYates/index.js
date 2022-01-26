const { swap } = require('../../utils');

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    }

    return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.join());
const shuffleArray = shuffle(array, 6);
console.log(shuffleArray.join());