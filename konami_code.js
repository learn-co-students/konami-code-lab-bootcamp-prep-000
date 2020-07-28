const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

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
