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

  document.addEventListener("keydown", function(event) {
    var key = parseInt(event.detail || e.which)
    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("I see what you did there...")
      }
    } else {
      index = 0
    }
  })
}
