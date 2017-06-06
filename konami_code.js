const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    var index= 0

  document.body.addEventListener('keydown', function(e) {
      const key = parseInt(e.detail || e.which)

      if (key===code[index]) {
        index++

        if (index === code.length - 1) {
          alert('You Did It!')

          index = 0
        }
      } else {
        index = 0
      }
    })
  }



  

/* NOTES FOR STARTER CODE
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
*/
