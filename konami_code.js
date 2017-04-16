//konami-code-lab-bootcamp-prep-000
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body');
  //onKeyDownHandler(e)
  var index = 0

  body.addEventListener( 'keydown' , function(e) {
    var key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
    }
    else {
      index = 0;
    }
    if (index === code.length) {
      alert("YOU DID IT!");
      index = 0;
    }
  });
}
