const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDown)

  var index = 0

  function onKeyDown(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {


      if (index === code.length - 1) {
        alert("You inputed the Konami Code. woohoo.")
        index = 0
      }
      index++
    } else {
      index = 0
    }
  }
}
