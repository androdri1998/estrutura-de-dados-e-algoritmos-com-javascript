const findMaxValue = array => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

const countingSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const maxValue = findMaxValue(array);
    const counts = new Array(maxValue + 1);
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0;
        }

        counts[element]++;
    });

    let sortedIndex = 0;
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortedIndex++] = i;
            count--;
        }
    });

    return array;
}

let array = [5, 4, 3, 2, 3, 1];
console.log(array.join());
array = countingSort(array);
console.log(array.join());