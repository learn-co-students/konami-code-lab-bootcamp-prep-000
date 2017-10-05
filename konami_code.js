/*
1. You'll want to attach an event listener to document.body and check for 'keydown' events. 
2. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. 
3. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.
*/
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  window.addEventListener('keydown',onKeyDownHandler);
}

init();
var index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    if (index === code.length - 1) {
      alert("KONAMI CODE!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
