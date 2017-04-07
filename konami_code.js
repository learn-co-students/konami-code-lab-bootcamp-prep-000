const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
var key
function init(){
  document.body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e){
  key = parseInt(e.detail || e.which)
  if (key === code[index]){
    index++

    if (index === code.length){
      alert("The code was entered!")
      index = 0
    }
  } else {
    index = 0
  }
}
