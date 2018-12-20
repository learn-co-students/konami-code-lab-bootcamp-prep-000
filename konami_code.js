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
  let i=0;
  document.body.addEventListener('keydown', function (keyStroke) {
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
  })
}

init()
