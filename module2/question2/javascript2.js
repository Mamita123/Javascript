/*Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order.*/

let numberOfParticipants = parseInt(prompt("Enter number of the participants: "));

let name = [];
const ol = document.createElement("ol")

for (let i = 0; i<numberOfParticipants; i++){
  name[i] = prompt(`Participants name: `);
  ol.innerHTML += `<li>${name[i]}</li>`;
}

document.body.appendChild(ol);