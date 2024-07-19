let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(myDate.getUTCDay());
// console.log(myDate.getUTCFullYear());
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2025, 1, 5);
// console.log(myCreatedDate.toDateString());

let formatDate = new Date("01-10-2024");
// console.log(formatDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(formatDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

myTimeStamp.toLocaleString('default',{
    
})