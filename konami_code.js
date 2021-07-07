const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// keep track of index outside of the event handler
var index = 0

function init() {
  const input = document.querySelector('body')
  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      while (index < code.length) {
        if (key === code[index]) {
          index++

          if (index === code.length - 1) {
            alert("Yay!! Konami!!")
            index = 0
          }
        } else {
          index = 0
          alert("Try again!")
          break
        }
      }
    }

  })
}
