let studentName = prompt("Enter your name: " + "I will assign you in one of our 4 classes.");
let classNumber;
classNumber = Math.floor((Math.random()*4) + 1);
if (classNumber === 1) {
  document.write("congratulations" + studentName + "!" + "Your class is Gryffindor.");}
  //  document.write is used to print in the browser & console,
//  log is used to print in console
  else if (classNumber === 2){
  document.write("Congratulations " + studentName + " ! " + "Your class is Slytherin.");}

else if (classNumber ===3){
  document.write("Congratulations " + studentName + " ! " + "Your class is Hufflepuff.");
}
else{
  document.write("Congratulations " + studentName + " ! " + "Your class is Ravenclaw.");
}






















const room1 = 'Gryffindor';
const room2 = 'Slytherin';
const room3 = 'Hufflepuff';
const room4 = 'Ravenclaw';

const name=prompt('Enter your name?')
let result = Math.floor(Math.random()*4)+1;
console.log(result);

if (result===1){
  document.querySelector('#target').innerHTML = name +'you are in class'+ room1+'.';}
else if (result ===2){
  document.querySelector('#target').innerHTML = name +'you are in class'+ room2+'.';}
else if (result ===3){
  document.querySelector('#target').innerHTML = name +'you are in class'+ room3+'.';}
else{
  document.querySelector('#target').innerHTML = name +'you are in class'+ room4+'.';}
