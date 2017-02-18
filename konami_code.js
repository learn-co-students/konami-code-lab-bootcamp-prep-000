const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

var index = 0

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which) //add event listener to document body that waits for keydown function. parseInt collects the numbers entered and .detail/.which return those.

    if (key === code[index]) {
      index++ //if what is entered equals the code, loop through?

      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0 //if all numbers match, happy message
      }
    } else {
      index = 0 //if numbers do NOT match, nothing happens
    }
  })
}

init()
