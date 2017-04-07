const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0;
var matchCode = [];

function konamiCodeEvent(event){
  var key = parseInt(event.detail || event.which)
  if (key === code[i]){
    matchCode.push(key)
    i++
    if (matchCode.length === code.length){
      alert('You did it!')
    }
  } else {
    matchCode = [];
    i = 0
  }
}


function init() {
  // your code here
  const body = document.getElementsByTagName('body')
  body[0].addEventListener('keydown', konamiCodeEvent) // end event listener
}
