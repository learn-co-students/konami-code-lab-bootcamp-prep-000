// key map
/*const allowedKeys = {
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  65: 'a',
  66: 'b'
};

// konami code sequence
const konamiCode = [
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

// variable to remember 'position' user has reached so far
let konamiCodePosition = 0

function init() {
  // keydown event listener
  document.body.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    const key = allowedKeys[e.key];
    // get value of required key from konami code
    var requiredKey = konamiCode[konamiCodePosition];
    // compare key with required key
    if (key === requiredKey) {
      //move to next key in konami sequence
      konamiCodePosition++;
      // if last key is reached, print congrats
      if (konamiCodePosition === konamiCode.length) {
        alert("Congrats! You did it!");
        konamiCodePosition = 0;
      }
    } else {
        konamiCodePosition = 0;
    }
  });
}
*/
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

function init() {
  let index = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    if (key === codes[index]) {
      index++;
    }

    if (index === codes.length) {
      window.alert("Conrats! You found the Secret Code.");
      index = 0
    }

  });
}
