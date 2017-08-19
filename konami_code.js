const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up up down down left right left right b a
var index = 0

function init() {
  document.body.addEventListener('keydown', function (event) {
    var key = parseInt(event.detail || event.which)
    if (key === code[index]) {
      if (index === code.length - 1) {
        alert("Happy me!")
        index = 0
      }
      else {
        index++
      }
    }
    else {
      index = 0
    }
  })
}
