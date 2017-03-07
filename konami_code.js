const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var counter = 0;

document.onload = init();

function init() {
  document.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  })
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[counter]) {
    counter++;
  }

  if(counter === code.length) {
    alert("KONAMI CODE");
    counter = 0;
  }
}
