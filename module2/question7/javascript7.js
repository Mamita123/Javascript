/*Modify the function above so that it gets the number of sides on the dice as a parameter.
    With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that
the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning.*/

let dice_roll;
dice_roll = num => Math.floor(Math.random() * num + 1);

let choice;
const ul = document.createElement("ul");

num = prompt("How many sides the dice should have?");

do {
  choice = dice_roll(num);
  ul.innerHTML += `<li>${choice}</li>`;
}
while (choice !==num);
document.body.appendChild(ul);