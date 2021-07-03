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
  document.body.addEventListener('keydown', function (event) {
    const key = parseInt(event.detail || e.which)
    if (key === code[index]) {
      alert('Hello')
    }
  })
}
init()
