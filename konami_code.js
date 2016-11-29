function init() {
  var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  var index = 0
  function onKeyDownHandler(e) {
    var key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
document.body.addEventListener('keydown', onKeyDownHandler)
}



// var script = document.createElement('script')
// document.body.appendChild(script)

// script.addEventListener('keydown', init())


/**************
const alphabet = ['a', 'b', 'c']

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === alphabet[index]) {
    index++

    if (index === alphabet.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}
************/
