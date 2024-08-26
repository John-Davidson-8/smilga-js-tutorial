// String Properties and Methods
// Wrapper String Object, don't memorize methods

let text = " Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1)); // gets last character
console.log(text.indexOf("e")); // gets the first instance
console.log(text);
console.log(text.trim()); // trims white space at beginning and end?
console.log(text.trim().toLocaleLowerCase().startsWith("peter")); // chaining methods
console.log(text.includes("eter"));
console.log(text.slice(0, 2));
console.log(text.slice(-4)); // this one goes to the end of the string and works back
