const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  const input = document.querySelector('body');
  input.addEventListener('keydown', konamiHandler);
}

function konamiHandler(e) {
  const key = parseInt(e.detail || e.which);
  let banner = document.querySelector('body');
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      banner.innerHTML = '<h1">KOMAMIIIII</h1>';
      alert('KONAMI');
      index = 0;
    }
  } else {
    index = 0;
  }
}

init();
