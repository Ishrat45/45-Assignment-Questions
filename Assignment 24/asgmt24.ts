import { log } from "console";

let honda = "honda";
let uppercaseHonda = "HONDA";
let five = 5;
let fifteen = 15;

// test for equality and inequality with strings

console.log ("Is Honda equal to honda?");
console.log(honda == "honda");

console.log("\nIs honda not equal to honda?");
console.log(honda != "honda");

// test using Lowercase function

console.log("\nIs HONDA is equal to honda after converting to Lowercase?");
console.log(uppercaseHonda.toLowerCase() == "honda")

console.log ("\nIs HONDA is not equal to honda after converting to lowercase?");
console.log(uppercaseHonda.toLowerCase() != "honda")

// numerical tests 

console.log("\nIs 5 equal to 15?");
console.log(five == fifteen);

console.log("\nIs 5 not equal to 15?");
console.log(five != fifteen);

console.log("\nIs 5 less than 15?");
console.log(five < fifteen);

console.log("\nIs 5 greater than 15?");
console.log(five > fifteen);

console.log("\nIs 5 less than or equal to 15?");
console.log(five <= fifteen);

console.log("\nIs 5 greater than or equal to 15?");
console.log(five >= fifteen);

