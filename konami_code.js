const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

function init() {

  document.querySelector('body').addEventListener("keydown", function(e) {
    var lastInput = parseInt(e.detail || e.which);

    if (code[index] == lastInput) {
      index++

      if (index == code.length) {
        alert('LOL NERD');
        index = 0;
      }
    }
    else {
      index = 0;
    }
  }
)}
