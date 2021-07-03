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
  var index = 0;
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    console.log(key);
    if (key === code[index]) {
      index++
    } else {
      index = 0
    }
    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  })
}
