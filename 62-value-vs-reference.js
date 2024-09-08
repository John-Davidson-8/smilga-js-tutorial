// Reference vs Value
// Primitive Data Types
// String, number, symbol, boolean, undefined, null
// Arrays, functions, objects = objects
// typeof

/* When assigning primitive data type values to a variable 
any changes are made directly to that value, without 
affecting the original value */

/* When assigning non primitive data type values to a 
variable done by reference so any changes will affect
all the references */

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };
let person2 = person;
person2.name = "susy";
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
