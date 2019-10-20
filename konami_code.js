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

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert('YOU DID IT!')
        index = 0
      }
    } else {
      index = 0
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
