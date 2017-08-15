const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let correctKeys = 0;

function init() {
  const target = document.body
  target.addEventListener('keydown', function(key) {
    let keyPressed = parseInt(key.which || key.detail);
    if (keyPressed === code[correctKeys]) {
      correctKeys++;

      if (correctKeys === code.length) {
        alert('Hurray!');
        correctKeys = 0;
      }
    }
    else {
      correctKeys = 0;
    }
  })
};
