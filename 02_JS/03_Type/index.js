// Type Converstion = change the datatype of a value to another
// (strings, numbers, booleans)

// ! user input is STRING
let age = window.prompt("How old are you?");

age = Number(age);
age += 1;
console.log(age, typeof age);

console.log("Age is still String Type:", "Happy Birthday! You are", age, "years old");

