const HashTable = require('../../HashTable');

const hashTable = new HashTable();

hashTable.put('Gandalf', 'gandalf@email.com');
hashTable.put('John', 'johnsnow@email.com');
hashTable.put('Tyrion', 'tyrion@email.com');

console.log(hashTable.hashCode('Gandalf') + '-Gandalf');
console.log(hashTable.hashCode('John') + '-John');
console.log(hashTable.hashCode('Tyrion') + '-Tyrion');

console.log(hashTable.get('Gandalf'));
console.log(hashTable.get('test'));

hashTable.remove('Gandalf');
console.log(hashTable.get('Gandalf'));

const hashTableColision = new HashTable();

hashTableColision.put('Ygritte', 'ygritte@email.com');
hashTableColision.put('Jonathan', 'jonathan@email.com');
hashTableColision.put('Jamie', 'jamie@email.com');
hashTableColision.put('Jack', 'jack@email.com');
hashTableColision.put('Jasmine', 'jasmine@email.com');
hashTableColision.put('Jake', 'jake@email.com');
hashTableColision.put('Nathan', 'nathan@email.com');
hashTableColision.put('Athelstan', 'athelstan@email.com');
hashTableColision.put('Sue', 'sue@email.com');
hashTableColision.put('Aethelwulf', 'aethelwulf@email.com');
hashTableColision.put('Sargeras', 'sargeras@email.com');

console.log(hashTableColision.toString());