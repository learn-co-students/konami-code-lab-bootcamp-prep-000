'use strict';

const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function init() {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    
    const key = event.key;
    if (key === codes[index]) {
      console.log(key);
      
      index++;
      if (index === codes.length) {
        alert("Hurray!");
        console.log("yay");
        index = 0
      }
    } else {
      index = 0
    }
      
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
}
