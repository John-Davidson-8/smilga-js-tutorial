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

// Objects Challenge
/* Objects #6 

1. create car object
2. add make, model, year, colors (array), hybrid (boolean keys)
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods
*/

const car = {
  make: "ford",
  model: "focus",
  year: 1970,
  color: ["black", "blue", "red", "white"],
  hybrid: false,
  drive: function () {
    console.log("driving");
  },
  stop() {
    // this is the new ES6 way of doing methods within objects
    console.log("stopping");
  },
};
console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();
