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

var index = 0;

function init(e) {
  const input = document.body.addEventListener('keydown', onKeyDownHandler);
  }

function onKeyDownHandler(event) {
  const key = parseInt(event.detail || e.which)
  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert('you did it')
      index = 0
    }
  } else {
    index = 0
  }
}
