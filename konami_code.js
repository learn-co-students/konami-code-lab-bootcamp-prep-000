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

var y = 0

function init() {
  document.body.addEventListener('keydown', function advance(x) {
    var key = x.key
    if (key === codes[y]) {
      y++
    } else {
      y = 0
    }
    if (y === codes.length) {
      alert("Congratulations!")
      y = 0
    } 
  })
}

init(x)