const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let body = document.body
  let index = 0

  function onKeyDownHeandler(e) {
    const key = parseInt(e.detail || e.which || e.location)
    if (key === code[index]) {
      index++
      // console.log(e.which)
      if (index === code.length) {
        alert('Congratulations!\nYou WON!')
        index = 0
      }
    } else {
      index = 0
    }
  }

  body.addEventListener('keydown', onKeyDownHeandler)
}

init()
