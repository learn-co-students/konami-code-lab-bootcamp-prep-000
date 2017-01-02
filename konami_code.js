const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  document.body.addEventListener('keydown', function(event) {
    var key = parseInt(event.detail || event.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("konami code");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();
