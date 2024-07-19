const score = 555;

const mybalance = new Number(999);
// console.log(mybalance);

// console.log(mybalance.toString().length);
// console.log(mybalance.toFixed(2));

const anotherNumber = 103.54;
console.log(anotherNumber.toPrecision(4));

const myNumber = 1000000;
// console.log(myNumber.toLocaleString("en-IN"));

// +++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.55));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

console.log(Math.random());
console.log(Math.floor(Math.random() * 5) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
