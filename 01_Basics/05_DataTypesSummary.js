// Two parts of datatypes
// 1. Primitive
// 2. Nom-Primitive // Reference type

// difference -- main difference is (call by Value and call by reference ka h) kisss traha sse inko memory me store kiya jata h or access kiya jata h ka hai

// Primitive - 7 types : N N B B S S U

// 2. Nom-Primitive || Reference type
//  Arrays , objects , functions

const score = 100;
// console.log(typeof score);  // number

const scoreValue = 100.3;
// console.log(typeof scoreValue); // number

const inLoggedIn = false;
// console.log(typeof inLoggedIn);  // boolean

const anotherValue = null;
// console.log(typeof anotherValue);  // object

let userpassword;
// console.log(typeof userpassword); // undefined

// symbol
const id = Symbol("ujjawal");
const anotherId = Symbol("Ujjawal");
// console.log(id === anotherId); // false - id and anotherId is not equal and also there type is not equal
// console.log(typeof id); // symbol

const bigNumber = 5454n;
// console.log(bigNumber);
// console.log(typeof bigNumber); // bigint

//  Arrays , objects , functions
const names = ["ujjawal", "Krishan", "Radha"];
console.log(typeof names); // object

const detail = {
  name: "Ujjawal",
  age: 19,
  city: "jaipur",
};
console.log(typeof detail);  // object

function moreDetail() {
  let contact = 9376510453;
  console.log(contact);
}

console.log(typeof moreDetail);  // function


let myfunction = function () {
  console.log("Ujjawal sharma");
};

console.log(typeof myfunction); // function
