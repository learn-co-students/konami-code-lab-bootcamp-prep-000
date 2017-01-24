const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

// unattached event handler
function init() {
  //attach an event listener to document.body and check for 'keydown' events.
  document.body.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  //console.log(key)

  if (key === code[index]) {
    index++
	//console.log(index)

    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  }
  else {
    index = 0
  }
}

init();
