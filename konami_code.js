console.log("Let the games begin????")
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log("Let the games begin!")
  let index = 0

    document.body.addEventListener('keydown', function(e) {
    console.log(e.which)
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Komnami!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}

init()
