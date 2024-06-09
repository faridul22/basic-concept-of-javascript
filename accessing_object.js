const user = {
    nama: "Farid",
    contact: {
        phone: '01611118926',
        email: 'developerfarid2223@gmail.com',
    },
    pet: {
        name: "jacky",
        info: {
            color: "yellow",
            weight: '2.5k',
        }
    },
    familyMembers: [
        { name: "x", age: 43 },
        { name: "y", age: 23 }
    ]
}

// const email = user.contact.email;
// console.log(email);

const { contact: { email } } = user;
// console.log(email);

const { pet: { info: { color } } } = user;
// console.log(color);

const { familyMembers: [{ name, age }, { name: name_, age: age_ }] } = user;
// console.log(age)
console.log(name_, age_)
