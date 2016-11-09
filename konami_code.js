const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var keystrokes = []

function init() {

  const body = document.querySelector('body')
  body.addEventListener('keydown', keyListener)
}


function keyListener(e){
  keystrokes.push(e.detail || e.which)
  for(let i = 0; i < keystrokes.length; i++){
    if(keystrokes[i] != code[i]){
      keystrokes = []
      break
    }
    else if(keystrokes.length == 10){
      alert('KONAMI')
      keystrokes = []
      break
    }
  }
}
