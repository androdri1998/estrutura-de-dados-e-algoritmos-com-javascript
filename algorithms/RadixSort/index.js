const findMaxValue = array => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

const findMinValue = array => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }

    return array;
}

const radixSort = (array, radixBase = 10) => {
    if (array.length < 2) {
        return array;
    }

    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);
    let significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        significantDigit *= radixBase;
    }

    return array;
}

let array = [3, 5, 1, 15, 70, 87, 6, 4, 7, 2];
console.log(array.join());
array = radixSort(array);
console.log(array.join());