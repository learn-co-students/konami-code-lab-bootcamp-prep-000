const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(e) {
    const keyPressed = parseInt(e.detail || e.which)

    if (keyPressed === code[index]) {
      index++

      if (index === code.length - 1) {
        alert('Good job, not-schmuck!')
        index = 0
      }
    } else {
      index = 0
    }
  })
}
