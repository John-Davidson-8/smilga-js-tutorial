// Arrays, Functions and Objects
// Objects - key/value pairs methods
// dot notation
// Below is an object

const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    // ES6 shortcut omits the function keyword above
    console.log("Hello my name is JOHN");
    // once I invoke this function it becomes a method.
  },
};

// can also assign properties to other variables as below:
const age = person.age;
console.log(age);

// can also change property values by not entering object in the following way:
person.name = "bob";

console.log(person.name); // this is one way to access the properties(keys) in the object, by dot.notation
console.log(person.siblings[2]);
person.greeting();
