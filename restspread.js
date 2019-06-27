// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// Use the spread operator on objects to take all the keys 
// but override (or add) other properties. It's similar to 
// the merge method in ruby.

"use strict";

const person = {
  name: "Ken",
  age: 29,
  status: "active"
};

const accountSettings = {
  ... person,
  status: "inactive",
  mood: "happy"
};

console.log(accountSettings);