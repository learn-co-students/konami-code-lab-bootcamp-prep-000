const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

let docBody = document.body
docBody = addEventListener('keydown', onKeyDownHandler)

  // Keep track of index outside of the event handler.
  let index = 0;
  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Konami Kode!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
