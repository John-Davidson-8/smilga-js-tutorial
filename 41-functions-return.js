// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm

// const wallHeight = 80;

// function calculate(value) {
//   console.log("The value in cm is : " + value * 2.54 + " cm");
// }

// There are two ways of doing this! The first one measuring the width just puts the value straight into the "calculate" function, that is 100 inches. The second way is to put a variable into the "calculate" function which has been declared beforehand above, "const wallHeight = 80;'.

// const width = calculate(100);
// const height = calculate(wallHeight);

// The problem now is in the code below which one would think that 'const dimensions = [width, height];' would return in the console log the results of 'dimensions.' However, it does not. The array 'dimensions' returns 'undefined' in the log. Why is this? This is because functions although carrying out calculations return as 'undefined.' Functions do what is asked of them, but do not return the value. We must set up a return!

// const dimensions = [width, height];
// console.log(dimensions);

// Another way of doing it is to use returns as below. I have taken away the console logs, and now the returns (calculations/data) are going to be in the array 'dimensions.'

const wallHeight = 80;

function calculate(value) {
  const newValue = value * 2.54;
  return newValue;
  // could also just do the following:
  // return value * 2.54;
  // Also, please be aware that no code will run after the 'return' as this is all JS wants to do in the function. The return is final!
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
