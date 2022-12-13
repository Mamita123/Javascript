
  let firstNumber = prompt("Enter first integer");
  let secondNumber = prompt("Enter second integer");
  let thirdNumber = prompt("Enter third integer");

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  thirdNumber = parseInt(thirdNumber);

  let sum = (firstNumber + secondNumber + thirdNumber);
  alert("the sum is" + sum);
  let average = (firstNumber + secondNumber + thirdNumber) / 3;
  alert("the average is" + average);
  let product = firstNumber * secondNumber * thirdNumber;
  alert("the product is " + product);

  document.querySelector('#target').innerHTML= 'Sum is: '+sum+ '<br>'+'Product is:'+ product +'<br'+'Average is:'+average;



