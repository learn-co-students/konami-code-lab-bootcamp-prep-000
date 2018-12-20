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
  var i=0;
  document.body.addEventListener('keydown', billAndLanceMostExcellentAdventure().key)
}

function billAndLanceMostExcellentAdventure(keyStroke) {
  var correctInput=codes[i];
  do {
    if (keyStroke===correctInput) {
    i++
    }
    else {
    i=0
    }
  }
  while (i<codes.length);
  alert('HI 20000');
  return i=0
}
