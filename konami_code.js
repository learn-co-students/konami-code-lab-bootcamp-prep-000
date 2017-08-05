const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  console.log('started')
  let index = 0

  function keyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    console.log(key)
    if (key === code[index]) {
      index++
      console.log(index)
      if (index === code.length) {
        alert('You cracked the code!!!')
        index = 0
      }
    } else {
      index = 0
    }
  }

  const main = document.body
  main.addEventListener('keydown', keyDownHandler)
}
