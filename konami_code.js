const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var current = 0;
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);
    if (key === code[current]) {
      if (current === code.length-1) {
        alert("YOU DID IT!");
        current = 0;
      } else {
        current ++;
      }
    } else {
      current = 0;
    }
  })
}

init();
