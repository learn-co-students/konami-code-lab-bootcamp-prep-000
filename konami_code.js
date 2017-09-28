const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body');
  var sequence = [];

  body.addEventListener('keydown', function(e) {
    if (sequence.length === 10) {
      sequence.shift();
    }
    sequence.push(parseInt(e.detail || e.which));
    if (sequence.length < 10) {
      return false;
    }
    for (var i = 0; i < code.length; i++) {
      if (sequence[i] !== code[i]) {
        return false;
      }
    }
    alert("Konami code entered! 😀\n⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️");
  });
}
