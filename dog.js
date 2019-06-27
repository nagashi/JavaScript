// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// ES6 supports classical inheritance.

"use strict";

class Animal {
  eat() {
    console.log("om nom nom");
  }
}

class Dog extends Animal {
  // By using extends, the Dog class will inherit all methods from the Animal class
}

const d = new Dog();
d.eat();