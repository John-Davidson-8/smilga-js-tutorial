// Template Literals
// Backtick characters ``
// Interpolation ${} - insert expression (value)

const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old";
console.log(sentence);

const value = `Hey it's ${name} and he is ${age} years old and ${4 * 4}`;
console.log(value);

// Chapter 58 — Strings Challenge
// below is correct but not the way he did it

/*
function fullName(firstName, lastName) {
  const name = `your name is ${firstName.toUpperCase()}  ${lastName.toUpperCase()}`;
  return name;
}
const endName = fullName("Jack", "Smith");
console.log(endName);
*/

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }

// Below is different because we are putting an object in the function parameters, note the curly brackets on the first line (they are keys in an object)

console.log(fullName("john", "smith"));

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "jordan", firstName: "peter" }));

// There is a choice here of using parameters or objects. With objects the order you put them in the log is irrelevant, but with arguments the order has to be logical!
