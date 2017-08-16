

function init() {
  // Key codes for A, B, and C keys.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  console.log("e.detail is", e.detail)
  console.log("e.which is", e.which)
  // console.log("e.location is", e.location)

  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    console.log("correct!")
    index++;

    if (index === code.length) {
      window.alert("You are a Konami master.");

      index = 0;
    }
  } else {
    console.log("incorrect!")
    index = 0;
  }
}
  document.body.addEventListener('keydown', onKeyDownHandler)
}
