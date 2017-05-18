const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init() {
  // your code here
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === konamiCode[index]) {
      index++

      if (index === konamiCode.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  const main = document.querySelector('body');
  main.addEventListener('keydown', onKeyDownHandler)
}
