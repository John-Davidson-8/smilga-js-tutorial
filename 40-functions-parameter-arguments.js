// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

function greet(name) {
  console.log("Hello there " + name);
}

// greet bob
greet("Bob");
// greet anna
greet("Anna");
// greet susy
greet("Susy");

// Please note that the terms placeholders, arguments, and parameters can be used interchangeably. They mean the same thing, that is local variables. These local variables do not need to be declared using let, var or const, they are declared by the function.

// I can also I think pass in variables from outside, need to look at this again!
