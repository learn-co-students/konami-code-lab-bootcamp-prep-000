// I'm looking for this
const kCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// keep track of index outside of the event handler
var index = 0

// unattached event handler
function init() {
  const key = parseInt(e.detail || e.which)
  if (key === kCode[index]) {
    index++
      if (index === kCode.length) {
        alert("YOU DID IT! KONAMI SUCCESS")
        index = 0
      }
    } else {
      index = 0
    }
  }

// event listener, only calls init when the event happens
const e = document.querySelector('body')
e.addEventListener('keydown', init)
