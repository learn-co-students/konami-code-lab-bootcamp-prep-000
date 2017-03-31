const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      if (index === code.length - 1) {
        alert("Congratulations!!!")
        index = 0
      }
      index++
    } else {
      index = 0
    }
  }

  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}
