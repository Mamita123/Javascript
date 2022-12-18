/*Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.*/

let input = []
for (let i= 0; i < 5; i++){
  input [i] = prompt(`Enter number: `);
}

for (let i = 4; i >= 0; i--){
  console.log("Reversed order: " + input[i]);
}