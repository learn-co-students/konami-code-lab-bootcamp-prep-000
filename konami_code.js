const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var konamiCodePosition = 0;

  const body = document.querySelector('body');

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key == code[konamiCodePosition]) {
      konamiCodePosition++;
      if (konamiCodePosition == code.length) {
          alert("Hurray!");
          konamiCodePosition = 0;
      }
    }else {
        konamiCodePosition = 0;
    }
  });
}
