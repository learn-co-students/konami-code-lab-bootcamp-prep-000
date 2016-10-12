const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  if (key === code[index]) {
    index++

    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler);
}

init();
