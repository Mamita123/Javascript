function calculate (){
  let operation = document.getElementById('operation').value;
  let number1 = Number(document.getElementById('num1').value);
  let number2 = Number(document.getElementById('num2').value);
  switch (operation){
    case "add":
      result.innerHTML = number1 + number2;
      break;
    case "sub":
      result.innerHTML = number1 - number2;
      break;
    case "multi":
      result.innerHTML = number1 * number2;
      break;
    case "div":
      result.innerHTML = (number1 / number2).toFixed(2);
      break;
  }
}

start.addEventListener('click', calculate);