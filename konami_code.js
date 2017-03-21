const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {

    const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index += 1;
      if (index === code.length) {
        alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

//init();
