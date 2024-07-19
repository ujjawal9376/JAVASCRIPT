// singleton => constrarcter se banega to singleton hoga
// Object.create

// object literals

const mySym = Symbol("key1");

const jsuser = {
  name: "Ujjawal",
  age: 19,
  location: "jaipur",
  [mySym]: "mykey1",
  email: "ujjawal@gmail.com",
  isLoggedIn: false,
  lastLigInDays: ["Monday", "Tuesday"],
};

// console.log(jsuser.name);
// console.log(jsuser["email"]);
// console.log(jsuser[mySym]);

// Object.freeze(jsuser)
jsuser.email = "sharma@gmail.com";
// console.log(jsuser);

jsuser.greeting = function () {
  // console.log("hello ujjawal");
};
jsuser.greeting = function () {
  // console.log(`Hello  js user ${this.name} `);
};

// console.log(jsuser.greeting());

const mmsym = ["keyvalue45"];
const greet = {
  name: "ujjawal",
  city: "jaipur",
  [mmsym]: "key",
};

greet.greetingss = function () {
  //   console.log(`hello Mr ${this.name}.i am from ${this.city}`);
};

// console.log(greet.greetingss());
// console.log(greet[mmsym]);

//  Object singleton

// const tinderUser = new Object();  // Singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "1234abc";
tinderUser.name = "Ujjawal";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularuser = {
  email: "ujjawal@gmail.com",
  fullName: {
    userFullName: {
      firstNmae: "Ujjawal",
      lastname: "Sharma",
    },
  },
};

// console.log(regularuser.fullName.userFullName.firstNmae);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({},obj1,obj2)  // combine 2 objects "Object.assign"
const obj3 = { ...obj1, ...obj2 }; // spread  => best way to add two objects

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "ujjawal@gmail.com",
  },
  {
    id: 1,
    email: "ujjawdsffsfal@gmail.com",
  },
  {
    id: 1,
    email: "ujjawal@gmail.com",
  },
];

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // very imp
// console.log(Object.values(tinderUser)); // very imp
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //  batata h ki ye property h ya nhi



// Object destructuring and JSON API

const course = {
  coursename: "javascript",
  price: "999",
  courseInstructor: "Ujjawal",
};

// const {price: p} = course;
// console.log(p);

// API 
