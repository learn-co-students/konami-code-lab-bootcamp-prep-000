const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var counter = 0;
//
function init() {
  const body = document.getElementsByTagName('body')[0];

  body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[counter]) {
      counter++;

      if (counter === code.length - 1) {
        alert("Noice!")
        counter = 0;
      }
    } else {
      counter = 0;
    }
  }
)
}
