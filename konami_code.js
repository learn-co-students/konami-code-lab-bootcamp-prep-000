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

let i = 0

function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[i]) {
    i++
    if (i === codes.length) {
      alert('Congratulations!')
    }
  } else {
    i = 0
  }
}

function init() {
  var body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}
