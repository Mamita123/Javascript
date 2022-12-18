/*Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest.*/
let num = [];
let user = " ";

while (user !== 0){
  user = parseInt(prompt("Enter number. To quit press 0."));
  num.push(user);
}

num.sort((a, b)=> b -a);

for (let i = 0; i < num.length; i++){
  document.write("The entered number from largest to smallest is: " + (num[i]));
}