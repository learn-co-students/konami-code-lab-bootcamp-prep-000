const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

const keyDown = document.querySelector('body')

function init() {
  keyDown.addEventListener('keydown', function(e) {
    var key = parseInt(e.which || e.detail)
    if (code[index] === key) {
      index++
      if (index === code.length) {
        alert('Congradulations!')
        index = 0
      }
    } else {
      index = 0
    }
  })
}
