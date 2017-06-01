// the code array refers to the event.which or event.detail number
// UP_ARRROW = 38; DOWN_ARROW = 40

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)

    if (key === code[index]) {

      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
      index++
    } else {
      index = 0
    }
  })
}
