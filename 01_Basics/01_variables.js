const accountId =56491;
let accountEmail = "ujjawalsharma@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;
//accountId = 2  // Not Allowed
accountEmail = "ujjawal@gmail.com";
accountPassword = "0000";
accountCity = "Goa";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountEmail,accountPassword,accountCity,accountState]);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

var name; // variable declaration
let name = value;  // variable declatation and initialization

