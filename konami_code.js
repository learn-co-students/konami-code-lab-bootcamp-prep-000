const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}

init();


// You'll want to attach an event listener to document.body and check for 'keydown' events.
// If the user enters this special code, alert() a congratulatory message.
//  But if they start entering anything else anywhere along the way, don't trigger anything out of the ordinary.
