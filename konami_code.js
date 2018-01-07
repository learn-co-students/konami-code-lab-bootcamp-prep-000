const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;

  var konami = document.querySelector('body');

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      if (index === (code.length)) {
        window.alert('Congratulations!');

        index = 0;
      }
    } else {
      index = 0;
    }
  }
konami.addEventListener('keydown', onKeyDownHandler);

console.log('Init success');
}

init();