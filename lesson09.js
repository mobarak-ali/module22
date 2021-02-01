//22-9 Destructure, Object, array, destructure complex object

//destructure.js

const person = {
    name: 'Jack William',
    age:    17,
    job:    'facebooking',
    gfName: "Ema Watson",
    address: 'Kochu Khet',
    phone: '017123456789',
    friends: ['Tom', 'Tomy', 'Tomato']
}

// const gfName = person.gfName;
// const phone = person.phone;

// const phone = person;
// const {phone, gfName} = person;
const {phone, gfName, salary, address} = person;



console.log(gfName,  phone, address, salary);
console.log(gfName,  phone, address, salary);
console.log(gfName,  phone, address, salary);
console.log(gfName,  phone, address, salary);
console.log(gfName,  phone, address, salary);


const friends = ['Salman', 'Aamir', 'Arman', 'Imran', "Abzal"];

const [first, second, third, ...rest] = friends;

console.log(third, first, second, rest);
console.log(rest);

const complexObj = {
    name: 'Abc',
    info: {
        address : 'Lalbag',
        id : '2441139'
    }
}

const { id } = complexObj.info;

console.log(id);