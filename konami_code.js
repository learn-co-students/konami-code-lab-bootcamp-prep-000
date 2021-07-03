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
    const key = parseInt(e.detail || e.which)

    console.log(key)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }

  document.addEventListener('keydown', onKeyDownHandler)

}
