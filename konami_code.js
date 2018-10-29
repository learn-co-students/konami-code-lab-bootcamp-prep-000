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

let codesIndex = 0;

function init() {
  // your code here
  document.addEventListener('keydown', (event) => {
    checkKey(event.key);
  });
}

function checkKey(key) {
  if (codes[codesIndex] === key) {
    if (codesIndex + 1 === codes.length) {
      displayMessage();
      codesIndex = 0;
      return;
    }
    codesIndex++;
  } else {
    codesIndex = 0;
  }
}

function displayMessage() {
  alert('CONGRATULATIONS ON ENTERING THE CODE!');
}

init();
