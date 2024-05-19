// Primitive => Number, String, Boolean, Null, Undefined
// Non-primitive => Reference variable(array, object, function)

// primitive => pass by value;
let a = 5;
let b = a;
b = 6;
console.log('a:', a)
console.log('b:', b);

// Non-primitive => pass by reference
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = numbers1;
numbers2.push(7);

console.log('numbers1:', numbers1)
console.log('numbers2:', numbers2)