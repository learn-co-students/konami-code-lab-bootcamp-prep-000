const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  const body = document.querySelector('body');
  var i = 0;
  body.addEventListener('keydown', function(e) {
    var keyPress = parseInt(e.which || e.detail);
    if (keyPress === code[i]) {
      i++;
        if (i === code.length) {
          alert("Congratulations! You found the code!");
          i = 0;
        }
    } else {
      i = 0;
    }
  })
}

init();
