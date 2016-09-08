const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  var body = document.querySelector('body');

  body.addEventListener('keydown',handler)
}

function handler(e){
  var key = parseInt(e.detail || e.which);

  if (key === code[index]){
    index++;

    if (index === code.length - 1){
      alert("NINJA!!!");
    }
  }else{
    index = 0;
  }
}

init();
