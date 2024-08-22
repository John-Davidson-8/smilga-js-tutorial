// Switch Statements
// Can be used instead of if... else statements
// const dice = 2;

// switch (dice) {
//   case 1:
//     console.log("you got one");
//     break;
//   case 2:
//     console.log("you got two");
//     break;
//   case 3:
//     console.log("you got three");
//     break;
//   default:
//     console.log("you did not roll the dice");
// }

// if (dice === 1) {
//   console.log("you got one");
// } else if (dice === 2) {
//   console.log("you got two");
// }

const person1 = {
  name: "peter",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "ryan",
  age: 15,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("your can vote");
} else {
  console.log("you are not eligible");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("your can vote");
} else {
  console.log("you are not eligible");
}
