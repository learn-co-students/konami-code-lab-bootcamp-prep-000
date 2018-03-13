const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector("body")
let index = 0

function init() {
  body.addEventListener("keydown", function(e) {
    const key = parseInt(e.detail || e.which || e.location)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert ("Yay, Konami Code!")
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}

init()
