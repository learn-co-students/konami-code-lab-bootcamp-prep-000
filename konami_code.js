const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

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
