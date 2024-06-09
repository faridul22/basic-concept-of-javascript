// const num1 = [1, 2, 3, 4, 5];
// const num2 = num1;

// num2.push(6);

// console.log(num1)
// console.log(num2)

const num = [1, 2, 3, 4, 5];

// const num1 = nums[0]
// const num2 = nums[1]
// const num3 = nums[2]
// const num4 = nums[3]

// --------Rest operator-------------
const [num1, num2, ...others] = num;
console.log(num1)


const person1 = {
    name: "Santa",
    age: 20,
    address: "Dhaka",
    dob: "01-01-2001",

};

const person2 = { ...person1 };
person2.isHaveDotter = true;

console.log(person1, person2);

const { age, ...userData } = person1;
console.log(age, userData)


