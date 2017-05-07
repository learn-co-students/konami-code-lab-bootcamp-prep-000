const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  const bodyKeyDown = document.querySelector('body');

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("Congratulations you cracked the code!")
        index = 0
      }
    } else {
        index = 0;
      }
  }
  document.body.addEventListener('keydown', onKeyDownHandler);
}
