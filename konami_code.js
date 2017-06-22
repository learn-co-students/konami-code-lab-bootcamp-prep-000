const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.body
var index = 0

body.addEventListener('keydown', function init(e) {
  var key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

      if (index === code.length) {
        alert("God mode enabled!")
        index = 0
      }
      }
    else {
      index = 0
    }
  })

function init() {}
