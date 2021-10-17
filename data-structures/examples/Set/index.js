const Set = require('../../Set');

const set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());

set.add(1);
set.add(2);
set.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4);

const unionAB = set.union(setB);
console.log(unionAB.values());
const intersectioAB = set.intersection(setB);
console.log(intersectioAB.values());
const differenceAB = set.difference(setB);
console.log(differenceAB.values());
const differenceBA = setB.difference(set);
console.log(differenceBA.values());

console.log(set.isSubsetOf(setC));
console.log(set.isSubsetOf(setB));
