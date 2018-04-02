const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let index = 0

  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', e => {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert('KONAMI!')

        index = 0
      }
    } else {
      index = 0;
    }


  })
}
init()

/* this fulfilled the requirements but did not pass the unit tests

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let next = code
function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', e => {
    if (e.keyCode === next[0]) {
      next.shift()
    } else {
      next = code
    }

    if (next.length === 0) {
      window.alert('KONAMI!')
    }
    // look for first code
    // if first code is pressed, shift next, and increment index of next
    // if next code is not pressed, reset next and iterator

  })
}
init()
*/
