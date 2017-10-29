
function init() {
  // Write your JavaScript code inside the init() function
//  const input = document.querySelector('input')

  //input.addEventListener('keydown', onKeyDownHandler(e))
  const input = document

input.addEventListener('keydown', function(e) {
  //console.log(e.which)
  onKeyDownHandler(e)
})
}
// Key codes for A, B, and C keys.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  //const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;
    console.log(index+"  -  "+e.which)
    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
