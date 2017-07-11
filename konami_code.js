const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler);
  var i = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[i]) {
      i++;
      if (i === code.length) {
        i = 0;
        return alert("Hurrah!");
      }
    } else {
      i = 0;
    }
  }
}
