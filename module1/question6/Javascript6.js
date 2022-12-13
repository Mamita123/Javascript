'use strict';

const choice = confirm('Should I calculate the square root?');
if (choice === true){
  let num = parseFloat(prompt('Enter a number.'));
  if (num>=0){
    let squareRoot = Math.sqrt(num)
    document.write("The square root of " + "number is " + squareRoot +".")}
    else if (num < 0 ){
      document.write("The square root is not calculated. ")}}