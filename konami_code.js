const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keyIndex = 0;

function init() {

  document.body.addEventListener('keydown', function(e) {

  const key = parseInt(e.detail || e.which)

  if (key === code[keyIndex]) {
    keyIndex++;

    if (keyIndex === code.length - 1) {
      alert ("You figured it out!");
      keyIndex = 0;
    }
  } else {
    keyIndex = 0;
  }
})
}
