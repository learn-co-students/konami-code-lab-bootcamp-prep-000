const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', checkKonamiCode);
}

function checkKonamiCode(e) {
  const key = parseInt(e.detail || e.which);
  if (code[index] === key) {
    console.log(index);
    index++;
    if (index === code.length) {
      alert('Konami Code!');
      }
  }
  else {
    console.log('nada');
    index = 0;
  }
}

init();