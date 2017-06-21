const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// keep track of index outside of the event handler
var index = 0

function init() {
  const input = document.querySelector('body')
  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      while (index < code.length) {
        if (key === code[index]) {
          index++

          if (index === code.length - 1) {
            alert("Yay!! Konami!!")
            index = 0
          }
        } else {
          index = 0
          alert("Try again!")
          break
        }
      }
    }

  })
}
