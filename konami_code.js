
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT, DANIELSON!")
      index = 0
    }
  } else {
    index = 0
  }
}// your code here
function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)
}
