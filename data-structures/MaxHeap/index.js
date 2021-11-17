const { defaultCompare, reverseCompare } = require('../MinHeap/util');
const MinHeap = require('../MinHeap');

class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}

module.exports = MaxHeap;