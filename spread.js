// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// The spread operator build sa new array with an extra
// item (like 0) added at the beginning of the array.

"use strict";


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = [
  0,
  // include all the items inside the numbers array
  // without the enclosing array.
  ...numbers
];

console.log(newNumbers);