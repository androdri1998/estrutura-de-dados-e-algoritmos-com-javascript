const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
const AMOUNT_POSITIONS = 20;
for (let index = 3; index < AMOUNT_POSITIONS; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}

console.log(fibonacci);
for (let index = 1; index < fibonacci.length; index++) {
    console.log(fibonacci[index]);
}