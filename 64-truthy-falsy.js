// Truthy and Falsy
// List of false values: "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = "";
if (text) {
  console.log(`Hey the value is truthy`);
} else {
  console.log(`Hey the value is falsy`);
}

// if (true) {
//   console.log(`Hey it works`);
// }
// if (2 > 1) {
//   console.log(`Hey it also works`);
// }
