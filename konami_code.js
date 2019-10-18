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
  // your code here
  var index = 0

  function triggerKeyDown(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("You Rock Buddy!!!")
        index = 0
      }
    } else {
      index = 0
    }
  }

  const check = document.body

  check.addEventListener("keydown", triggerKeyDown)
}
