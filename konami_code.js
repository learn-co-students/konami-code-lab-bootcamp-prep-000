const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  const konamiDetector = document.body;
  let konamiProgressIndex = 0;
  
  konamiDetector.addEventListener ("keydown", function(e) {
    const keyDetector = parseInt(e.which || e.key || e.detail || e.location);
    if (keyDetector === code[konamiProgressIndex]) {
      konamiProgressIndex++;
      if (konamiProgressIndex === code.length) {
        alert("Congratulations!");
      }
    } else {
      konamiProgressIndex = 0;
    }
  });
}