const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')
var userCode = []
function init() {
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    for (let i = 0, l = code.length; i < l; i++) {
      if (key === code[i]) {
        userCode.push(key)

        if (userCode.length === code.length) {
          window.alert("YOU DID IT!")
          i = 0
          userCode = []
        }
      }
    }
  })
}

init()
