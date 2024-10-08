// Bringing it all together
// Functions, return, if, arrays, for loop

const gas = [20, 30, 10, 50];
const food = [70, 30, 20];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]); // to check if it is working.
    total += arr[i]; // this adds up the items in array to a total
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
