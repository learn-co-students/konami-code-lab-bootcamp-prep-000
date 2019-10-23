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
  var body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  var key = parseInt(e.detail || e.which)

  for(var i = 0; i < code.length; i++) {
    if (key === code[i]) {
      alert("YOU DID IT!")
    }
  }
}
