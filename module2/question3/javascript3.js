/* Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order.*/

let dog_name = [];

const ul = document.createElement("ul");

for (let i = 0; i < 6; i++){
  dog_name.push(prompt(`Enter the dog name:`));
}

dog_name.reverse();

for (let i = 0; i < 6; i++){
  ul.innerHTML += `<li>${dog_name[i]}</li>`;
}
document.body.appendChild(ul);