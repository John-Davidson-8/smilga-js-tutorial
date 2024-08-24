// Loops
// Loops repeatedly run a block of code while condition is true
//while loop
// TURN OFF AUTOSAVE, as will enter infinite loop

// While loop

let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollars and I'm going to the mall");
  amount--; // this line breaks the loop
}

// Do while loops
// code block first, condition second (opposite of while loops)
// Code will run at least once, unlike while loop where condition must be met first

let money = 12;

do {
  console.log("You have " + money + "dollars");
  money++;
} while (money < 10);

// For loops

let i;
for (i = 0; i < 10; i++) {
  console.log("and the number is : " + i);
}

// For loop with variable inside the loop

for (let number = 11; number >= 0; number--) {
  console.log("and the number is :" + number);
}
