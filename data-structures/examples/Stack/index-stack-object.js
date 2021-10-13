const Stack = require('../../Stack/stack');

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.toString());
console.log(stack.peek());
