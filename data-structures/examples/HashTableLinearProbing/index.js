const HashTableLinearProbing = require('../../HashTable/hash-table-linear-probing');

const hashTableLinearProbing = new HashTableLinearProbing();

hashTableLinearProbing.put('Ygritte', 'ygritte@email.com');
hashTableLinearProbing.put('Jonathan', 'jonathan@email.com');
hashTableLinearProbing.put('Jamie', 'jamie@email.com');
hashTableLinearProbing.put('Jack', 'jack@email.com');
hashTableLinearProbing.put('Jasmine', 'jasmine@email.com');
hashTableLinearProbing.put('Jake', 'jake@email.com');
hashTableLinearProbing.put('Nathan', 'nathan@email.com');
hashTableLinearProbing.put('Athelstan', 'athelstan@email.com');
hashTableLinearProbing.put('Sue', 'sue@email.com');
hashTableLinearProbing.put('Aethelwulf', 'aethelwulf@email.com');
hashTableLinearProbing.put('Sargeras', 'sargeras@email.com');

console.log(hashTableLinearProbing.toString());