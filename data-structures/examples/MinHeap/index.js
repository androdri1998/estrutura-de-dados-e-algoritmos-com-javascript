const MinHeap = require('../../MinHeap');

const heap = new MinHeap();

for (let i = 1; i < 10; i++) {
    heap.insert(i);
}

console.log('Heap size', heap.size());
console.log('Heap is empty', heap.isEmpty());
console.log('Heap min value', heap.findMinimum());
console.log('Heap', heap.heap);
console.log('Extract', heap.extract());
console.log('Heap', heap.heap);