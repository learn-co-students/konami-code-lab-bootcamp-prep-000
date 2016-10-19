const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var codeIndex = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[codeIndex]) {
      codeIndex++

      if (codeIndex === code.length - 1) {
        alert("You did it!")
        codeIndex = 0
      }
    } else {
      codeIndex = 0
    }
  })
}
