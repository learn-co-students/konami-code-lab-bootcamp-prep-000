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
  var codeCheck = []
  document.body.addEventListener('keydown', function(event)
  {
    codeCheck.push(parseInt(event.detail || event.which))

    if (codeCheck.toString() === code.toString()) {
      alert('Congratulations!')
    }

  })
}
init()
