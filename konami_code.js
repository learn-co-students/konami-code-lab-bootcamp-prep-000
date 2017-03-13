const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  //keep track of index outside of event
  var index = 0
  //attach event listener to document.body
  //check for keydown events
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which)

    if (code[index] === key) {
      index++

    //user enters code `alert()`
    if (index === code.length - 1) {
      alert('You Konami Expert, You!')

      index = 0
    }
  } else {
    //not code
    index = 0
  }
  })
}
