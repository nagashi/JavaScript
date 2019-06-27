// ES6 language
// The ES6 language comes with the ability to make it 
// easy for files to be loaded and used. 
// See this file (adder.js) and runner,js

const DIGITS = 10;
function adder(x) {
  return DIGITS + x;
}

export default adder;
export {DIGITS};