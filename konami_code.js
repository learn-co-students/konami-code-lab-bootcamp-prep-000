const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const body = document.querySelectorAll('body')

var codeIndex = 0

function onKeyDownHandler(e){
  var key = parseInt(e.detail || e.which);
  if (key === code[codeIndex]){
    codeIndex ++ ;
    if (codeIndex === code.length){
      alert ('CONGRATS');
    }
  }
  else {
    index = 0
  }

}


function init() {
  document.body.addEventListener('keydown',onKeyDownHandler)
  }

init();
