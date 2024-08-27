// Array Properties and Methods
// let names = ["john", "bobo", "barry", "olga", "ben"];

// length
// console.log(names.length);
// to access last element in array
// console.log(names.length - 1);

// concat
// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames);
// console.log(allNames);
// reverse
// console.log(allNames.reverse());

// Unshift
// allNames.unshift("susy");
// allNames.unshift("anna");
// console.log(allNames);

// Shift
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// push
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// splice - mutates original array.
// const specificNames = allNames.splice(0, 3);
// console.log(specificNames);
// console.log(allNames);

// Exercise Full Name - even if original array is changed it still works

const names = ["anna", "susy", "bob", "john", "susan"];
const lastName = "shakeandbake";
const newArray = [];

// for loop

for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  // two ways to add last name to elements - the shorter way is shown first
  newArray.push(`${names[i]} ${lastName}`);
  // longer way is creating another variable
  // const fullName = `${names[i]} ${lastName}`;
}
// console.log(fullName);
console.log(names);
console.log(newArray);
