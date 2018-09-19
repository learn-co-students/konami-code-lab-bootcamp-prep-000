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
  document.body.addEventListener('keydown', onKeyDownHandler)
  let index = 0
  function onKeyDownHandler(e) {
    const keyDown = e.key;
    if (keyDown === codes[index]) {
      index++
      if (index === codes.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      i = 0
    }
  }
}
