const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  var index = 0
  var input = document.querySelector('body')

  input.addEventListener('keydown', function onKeyDownHandler(e) {
    var key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      console.log(key)
      index++

      if (index === code.length - 1) {
        alert("good job")
        index = 0
      }
    } else {
      index = 0
    }
  })
}

init()
