// map, forEach, find, filter, reducer
const numbers = [10, 20, 30, 40, 50, 60];

numbers.forEach(item => console.log(item + 2));

const numbers1 = numbers.forEach(item => console.log(item + 2));

const numbers2 = numbers.map(item => item + 1)
console.log(numbers2)

const foundedValue = numbers.find(item => item === 30)
console.log(foundedValue)

const lessThanForty = numbers.filter(item => item < 40)
console.log(lessThanForty)

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(sum)