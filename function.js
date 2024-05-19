// Normal function & function declaration
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(5, 7)
// console.log(sum)

// Normal function expression
const multiply = function (num1, num2) {
    return num1 * num2;
}
// console.log(multiply(7, 2))

// arrow function & function expression
const addNumbers = (num1, num2) => num1 + num2;
const result = addNumbers(5, 6);
// console.log(result)

let user = {
    age: 25,
    getAge: function () {
        console.log('normal fun', this.age)
    },
    getAgeDetails: () => {
        console.log('arrow func', this.age)
    }
}
// user.getAge();
// user.getAgeDetails();


// access function before initialization
const result3 = addition(3, 2)
console.log(result3)

function addition(num1, num2) {
    return num1 + num2;
}
