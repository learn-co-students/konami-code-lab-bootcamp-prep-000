const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
index = 0;

function init() {
  document.body.addEventListener('keydown', konamiInput)
}

function konamiInput(e){
  const key = parseInt(e.which || e.location);
  if (key === code[index]){
    index++;
    if (index === code.length){
      alert('Konami Code Enabled');
    }
  }
  else {
    index = 0;
  }
}
init();
