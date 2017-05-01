const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let last
let index = 0

function init() {
  // your code here
  document.body.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  if (key === code[0] && !last) {
    last = key
    index++
    return
  }
  if (key === code[index] && last === code[index - 1]) {
    if (index === code.length -1) {
      alert("You did it!")
    } else {
      last = key
      index++
      return
    }
  }
  last = undefined
  index = 0
}
