// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

// length
console.log(names.length);
// to access last element in array
console.log(names.length - 1);

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

// Unshift
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

// Shift
allNames.shift();
allNames.shift();
console.log(allNames);

// push
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);

// splice - mutates original array.
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);
