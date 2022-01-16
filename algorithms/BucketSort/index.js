const { insertionSort } = require('../InsertionSort');

const createBuckets = (array, bucketSize) => {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }

    return buckets;
}

const sortBuckets = (buckets) => {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]);
        }
    }

    return sortedArray;
}

const bucketSort = (array, bucketSize = 5) => {
    if (array.length < 2) {
        return array;
    }

    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
}

let array = [5, 4, 3, 2, 3, 1];
console.log('-----------------------------------')
console.log(array.join());
array = bucketSort(array, 2);
console.log('sorted by bucket sort: ', array.join());