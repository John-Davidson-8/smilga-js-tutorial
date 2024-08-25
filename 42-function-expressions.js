// Arrays, Functions and Objects
// Expressions - another way to define a function
// Create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries.

// function definition/declaration

function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

/* function expression below: the whole function from above is now assigned to the variable 'add.' The name of function addValues can be omitted as the the function is referred to as 'add.' The below function is now an 'anonymous function.' The variable 'add' holds the function. Also, the function name 'addValue' can be omitted as variable "add" holds the name. This creates an anonymous function */

const add = function addValues(num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

// ES6 came up with a shortcut for functions. They are called arrow functions. Below is an example:

const multiply = (num1, num2) => num1 * num2;
/*the last bit after the arrow is the function calculation and return, the first part in parenthesis is the function parameters */
