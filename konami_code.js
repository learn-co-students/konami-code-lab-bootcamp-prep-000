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

var body = document.body



function init() {
  var i = 0
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
      debugger
      if (key === code[i]) {
        i++
      if (i === code.length - 1) {
        alert('YOU DID IT!!!')
        i = 0
      }
    } else {
      i = 0
    }
  })
}
