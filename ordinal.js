var readlineSync = require('readline-sync');

var ordinal = function(digit) {
    var digitNum = Number(digit);
    var lastDigit = digitNum % 10;
    var lastTwoDigits = digitNum % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
      return digit + 'th';
    }
    else if (lastDigit === 1) {
      return digit + 'st';
    }
    else if (lastDigit === 2) {
      return digit + 'nd';
    }
    else if (lastDigit === 3) {
      return digit + 'rd';
    }
    else if (lastDigit !== 0) {
      return digit + 'th';
    }
    else {
      return digit + ' is not processable'
    }
}

var digit = readlineSync.question('Enter a digit: ');

var value = ordinal(digit);

console.log(value);