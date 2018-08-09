const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


let index = 0

function init() {
  let index = 0

  document.addEventListener("keydown", (e) => {
    if (e.which === code[index]) {
      index++
      // debugger
      if (index === code.length) {
        alert("You got the code!")
      }
    } else {
      index = 0
    }
  })
}

init();
