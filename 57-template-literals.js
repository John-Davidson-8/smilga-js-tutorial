// Template Literals
// Backtick characters ``
// Interpolation ${} - insert expression (value)

const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old";
console.log(sentence);

const value = `Hey it's ${name} and he is ${age} years old and ${4 * 4}`;
console.log(value);
