// Array

const myarray = [1, 2, 3, 4, 5];
// console.log(myarray.length);
// console.log(myarray[2]);

// Array methods

myarray.push(6);
// console.log(myarray);

let newarr = myarray.join();
// console.log(newarr);

// slice and splice
// slice => original array ko manipulate nhi krta h ;
// splice => original array ko manipulate krta h ;
let slarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(slarr.slice(4, 8));
// console.log(slarr.splice(2,5));

// let arr1 = ["ujjawal", "krishan", "radha", "vishnu"];
// let arr2 = ["Sharma", "yadav", "devi", "Ram"];

// const connectAll = [...arr1, ...arr2];
// console.log(connectAll);

// const another_array = [1, 2, 3, 4, [54, 6, 4, 6, [, 6, 5, [, 5, 5]]]];
// const flatArray = another_array.flat(Infinity);
// console.log(flatArray);

// Read more about 👇👇

console.log(Array.isArray("ujjawal"));  
console.log(Array.from("ujjawal"));
console.log(Array.from({name: "ujjawal"})); // interesting => also for interviews


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  // convert in array