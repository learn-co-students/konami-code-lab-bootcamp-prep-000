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
  const alphabet = ['a', 'b', 'c']

  // keep track of index outside of the event handler
  var index = 0

  // unattached event handler
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
      console.log('good')

      if (index === code.length) {
        window.alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
      console.log('wrong')
    }
  }

  // check every keypress
  document.body.addEventListener('keydown', onKeyDownHandler)
}
