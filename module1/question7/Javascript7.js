const numberOfDiceRolls = parseInt(prompt("How many times to roll the dice?"))

let i=0, diceRoll, sum=0;
while (i<numberOfDiceRolls) {
  diceRoll = Math.floor(Math.random() *6) + 1;
  i++
  sum += diceRoll
  console.log(diceRoll);
}

document.write(sum)