const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var body = document.body



function init() {
  var i = 0
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
      debugger
      if (key === code[i]) {
        i++
      if (i === code.length - 1) {
        alert('YOU DID IT!!!')
        i = 0
      }
    } else {
      i = 0
    }
  })
}
