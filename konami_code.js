const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        window.alert("Congratulations!");
      }
    } else {
      index = 0;
    }
  }

  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

init()
