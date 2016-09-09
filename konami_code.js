const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var prog = 0;
  document.body.addEventListener('keydown',function(e) {
    if (e.detail == code[prog] || e.which == code[prog]) {
      prog++;
    } else {
      prog = 0;
    }

    if (prog == code.length) {
       alert('Surprise!');
       prog = 0;
    }

  });
}

init()
