const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  const body = document.querySelector('body');
  var i = 0;
  var keyPress = 0;
  body.addEventListener('keydown', function(e) {
    keyPress = parseInt(e.which || e.detail);
  });
  body.addEventListener('keydown', function(e) {
    if (keyPress === code[i]) {
      i++;
        if (i === code.length) {
          window.alert("Congratulations! You found the code!");
          i = 0;
        }
    } else {
      i = 0;
    }
  })
}

init();
