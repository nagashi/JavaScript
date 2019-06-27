// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// The arrow function locks the value of 'this' to the 
// value it is outside the statement.

"use strict";

class Hello {
  constructor() {
    this.num = 2;
  }

  addTwo() {
    const addIt = () => {
      // arrow function locks the value of `this`
      this.num = this.num + 2;
    }
    addIt();
  }
}

const h = new Hello();
h.addTwo();
console.log(h.num);