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

var index = 0

function init() {
  document.body.addEventListener('keydown', function onKeyDown(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert('Congratulation!!!!')
        index = 0
      }
    }
    else {index = 0}
  })
  // your code here
}
