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




