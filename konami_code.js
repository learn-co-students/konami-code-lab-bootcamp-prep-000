const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let pressed = [];
  document.body.addEventListener('keydown', function(key) {
    pressed.push(parseInt(key.which || key.detail));
    if (pressed[pressed.length - 1] !== code[pressed.length - 1])
      pressed = [];
    if (pressed.length === code.length) {
      alert("Yippee!");
      pressed = [];
    }
  });
}

init();