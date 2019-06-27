// ES6 language
// If you're using version 7 or greater of node, use node
// else use babel-node to run the following program.
// ES6 supports classes in a way similar to ruby.

"use strict";

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  outputCard() {
    console.log(this.rank + " of " + this.suit);
  }
}

const c = new Card(5, "diamonds");
c.outputCard();