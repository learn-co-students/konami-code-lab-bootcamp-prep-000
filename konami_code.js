const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // keep track of index outside of event handler
  let index = 0

  const body = document.querySelector('body')

  body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.location);

    if (key === code[index]) {
      index ++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
