/* 
num1>num2 => num1 is greater
num2>num1 => num2 is grater
num1===num2 => numbers are equal
*/

// if else condition
const num1 = 10;
const num2 = 15;

if (num1 > num2) {
    console.log('Number 1 is greater')
}
else if (num2 > num1) {
    console.log("Number 2 is greater")
}
else {
    console.log("Numbers are equals")
}

// ternary operation
num1 > num2 ? console.log("Number 1 is greater") :
    num2 > num1 ? console.log("Number 2 is greater") :
        console.log("Numbers are equal")


// switch
