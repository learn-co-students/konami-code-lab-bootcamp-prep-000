const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')



var i = 0
body.addEventListener('keydown', function(e) {

 var key = parseInt(e.detail || e.which)
  if (key === code[i]) {
    i++

    if (key === code[code.length - 1]) {
      init()
      i = 0
    }
  } else {
    i = 0
  }
})

function init() {
  alert("YOU DID IT!")
}
