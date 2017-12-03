const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const main = document.body

main.addEventListener('keydown', onKeyDownHandler)

// main.addEventListener('keydown', function(e) {
//   console.log(e.which)
// })
// Key codes for A, B, and C keys.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
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


}
