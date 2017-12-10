const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const input = document.querySelector('body');
var index = 0;

function init() {
input.addEventListener('keydown', onKeyDownHandler );
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  console.log(e.which);
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Success! (↑↑ ↓↓ ← → ← → B A)");
      index = 0;
    }
  } else {
    index = 0;
  }
}
