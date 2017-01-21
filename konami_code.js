const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

  document.body.addEventListener('keydown', function(e) {
    var index = 0;
    const key = parseInt(e.detail || e.which);

    if(key === code[index]) {
      index++;

      if (key === code.length - 1) {
        alert("YOU DID IT!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  })
}
