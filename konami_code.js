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

var index = 0

function init() {
  document.addEventListener('keydown', (e) => {
    eventHandler(e);
  })
}

function eventHandler(e) {
  const keysPressed = parseInt(e.detail || e.which)

  if (keysPressed === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}
