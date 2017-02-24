const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;
const body = document.body;


function init() {
  body.addEventListener('keydown', konamiCode)
}

function konamiCode(e){
  const key = parseInt(e.detail || e.which)

  if(key === code[index]){
    index++
    if(index === code.length){
      alert("YOU DID IT!")
      index = 0;
    }
  }else{
    index = 0;
  }
}
