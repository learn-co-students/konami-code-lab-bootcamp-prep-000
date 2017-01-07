const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  var index = 0
  var body = document.body
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
    }
    else {
      index = 0
    }
    if (index === code.length) {
      alert("KONAMI CODE UNLOCKED!")
      index = 0
    }
})
}

init()
