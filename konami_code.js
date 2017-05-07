const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  window.addEventListener('keydown',onKeyDownHandler);
}
init();
// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("KONAMI CODE!")
      index = 0
    }
  } else {
    index = 0
  }
}