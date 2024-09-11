// Global Scope vs Local Scope
// any variable outside code block {} is said to be in global scope
// can be accessed anywhere in the programme
// Gotchas: name collisions, modify by mistake

let name1 = "bobo";
name1 = "peter";
console.log(name1);

function calculate() {
  // some other code
  console.log(name1);
  name1 = "orange";
  function inner() {
    name1 = "inner function name value";
    console.log(`this is from inner function ${name1}`);
  }
  inner();
}
calculate();

// be careful with this
