const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0

  function triggerKeyDown(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("You Rock Buddy!!!")
        index = 0
      }
    } else {
      index = 0
    }
  }

  const check = document.body

  check.addEventListener("keydown", triggerKeyDown)
}
