const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
function keyDownHandler(e) {
  const keyDown = parseInt(e.detail || e.which);
  if (keyDown === code[index]) {
    index++;
    
    if (index === code.length) {
      alert("Congratulations, you have been awarded 30 lives!") ;
      
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  let body = document.querySelector('body');
body.addEventListener('keydown', keyDownHandler);
}