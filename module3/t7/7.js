/*const target = document.getElementById('target');
target.setAttribute('class', 'my-list');
target.innerHTML += "<li>First item</li>";
target.innerHTML += "<li> Second item</li>";
target.innerHTML += "<li>Third item</li>";*/

// window.onload is optional since it depends on the way in which you fire events

/* window.onload= function(){
  //selecting the elements for which want to add a trigger
  const target = document.getElementById("trigger-button");
  const trigger = document.getElementById("trigger");

  //change display to 'block' on mouseover
  target.addEventListener('mouseover', () => {
    trigger.style.display = 'block';
  }, false);

  // change display to 'none' on mouseleave
  target.addEventListener('mouseleave',() => {
    trigger.styledispaly = 'none';
  }, false);
}*/

'use strict'

let p= document.getElementById("trigger");
let img = document.getElementById("target");

function hover(){
  img.src = 'img/picB.jpg'
}
p.addEventListener('mouseover',hover);