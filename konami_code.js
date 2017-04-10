// defines konami code
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // sets index for iteration
  var index = 0
  // gets <body> </body>
  const body = document.querySelector('body')
  // adds event listener to body
  body.addEventListener('keydown', function(e){
    // defines key as integer version of input
    var key = parseInt(e.which || e.detail)
    // if input === whatever part of code we're up to
    if (key === code[index]) {
      // add one to index to prep test for next key stroke
      index++
      // tests if input has reached the end of the code
      if (index === code.length) {
        alert("Congratulations!")
      }
      // if at any point a keystroke is entered that isn't in the code
      // the index will be set back to 0 so input can start again
      // from the beginning of the code
    } else {
      index = 0
    }
  })
}

// initializes the script function 
init()
