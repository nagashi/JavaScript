// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// Using a traditional function, versus the arrow =>, the 
// value of this is lost.

"use strict";

class Hello {
  constructor() {
    this.num = 2;
  }

  addTwo() {
    const addIt = function() {
      // non-arrow function loses the value of `this`
      this.num = this.num + 2;
    }
    addIt();
  };
}

const h = new Hello();
h.addTwo();
console.log(h.num);