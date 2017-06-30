const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var currentKey = 0;

function init() {
  document.body.addEventListener("keydown", konami)
}

function konami(e) {
  var keyPress = parseInt(e.detail || e.which);

  if (keyPress == code[currentKey]) {
    currentKey += 1;
  } else {
    currentKey = 0;
  }

  verifyCode();
}

function verifyCode() {
  if (currentKey == 9) {
    alert("Konami Code Accepted");
  }
}

init();
