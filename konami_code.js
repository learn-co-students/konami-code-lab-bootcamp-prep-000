const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  
  if (key === code[index]) {
    index += 1;
    
    if (index === code.length) {
      alert('Hurray!');
    }
    
  }
}

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler);
}