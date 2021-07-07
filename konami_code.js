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

function init() {
  var index = 0
  var page = document.body
  page.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert("You got the code!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}

init()
