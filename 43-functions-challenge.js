/*
## Functions #5

1. Create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. Create 3 vars "order1", "order2", "order3"
5. Call calculateResult, pass in some values and assign result to each order.
6. log all three orders
7. refactor "calculateTotal" to function expression
*/

// Below is one way, with the other way commented out. The first way is Smilga's preferred method for newbies as it is more explicit. However, as one becomes more adept at JS the second way that is commented out is preferred.

// function calculateTotal(subTotal, tax) {
// const total = subTotal + tax;
// return total;
//   return subTotal + tax;
// }
// console.log(calculateTotal(200, 20));

// const order1 = calculateTotal(100, 10);
// const order2 = calculateTotal(50, 5);
// const order3 = calculateTotal(25, 5);

// console.log(order1, order2, order3);

// Below is the code as function expression which is anonymous. To name this function expression I would put a name just before the parenthesis (subTotal, tax).

// const calculateTotal = function(subTotal, tax) {
//   const total = subTotal + tax;
//   return total;
//   return subTotal + tax;
// }

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const order1 = calculateTotal(300, 30);
const order2 = calculateTotal(400, 40);
const order3 = calculateTotal(500, 50);

console.log(order1, order2, order3);
