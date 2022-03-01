const MaxHeap = require('../../MaxHeap');

const heap = new MaxHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size', heap.size());
console.log('Heap is empty', heap.isEmpty());
console.log('Heap min value', heap.findMinimum());
console.log('Heap', heap.heap);
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());
console.log('Heap', heap.heap);
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());
console.log('Extract', heap.extract());