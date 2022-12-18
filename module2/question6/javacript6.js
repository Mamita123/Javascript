/* Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main program that rolls the dice until the result is 6.
 The main program should print out the result of each roll in an unordered list (<ul>).*/

function roll_dice(){
  return Math.floor(Math.floor(Math.random()*6 + 1));
}

let result;
const ul = document.createElement("ul");

do {
  result = roll_dice();
  ul.innerHTML += `<li>${result}</li>`;
}
while (result !== 6);
document.body.appendChild(ul);