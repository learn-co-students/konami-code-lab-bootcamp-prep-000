const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.getElementByTagName("body");

var index = 0;

function init() {
  body.addEventListener("keydown", function(e));
}

function onKeyDownHandler(e) {
  var index = 0;
  var key = parseInt(e.detail || e.which)

  if (e.which === code[index]) {
    index++;
    if (index === code.length - 1) {
      alert("Easter Egg Unlocked!");
    }
  } else {
    index = 0;
  }
}
