const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let idx = 0

function init() {
  document.body.addEventListener('keydown', keydownHandler)
}

function keydownHandler(e) {
  const key = parseInt(e.detail || e.which)
  if (key == code[idx]) {
    idx++
    if (idx == code.length - 1) {
      alert("You entered the Konami Code!")
      idx = 0
    }
  } else {
    idx = 0
  }
}
