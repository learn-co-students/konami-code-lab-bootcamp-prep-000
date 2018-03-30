const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', codeListener);
}

function codeListener(e) {
  console.log(e.which);
  var key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("You know the super-secret password!!");
      index = 0;
    }
  } else {
    index = 0;
  }
}