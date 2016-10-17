const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const alphabet = [65, 66, 67]
function init() {
  const input = document.querySelector('body')

  input.addEventListener('keydown', onKeyDownHandler);
  // your code here
}
// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;


    if (index === code.length ) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0;
  }
}

init();
