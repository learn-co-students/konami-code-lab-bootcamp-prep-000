

function init() {

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;
// Keep track of index outside of the event handler.

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
document.addEventListener('keydown',onKeyDownHandler)
}
// This is the function that would be invoked by the event listener.
