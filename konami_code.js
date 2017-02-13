const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var i = 0
function keyDown(e){
  const key = parseInt(e.detail || e.which)

  if(key === code[i]){
    i++
    if(i === code.length){
    alert('Congratulations!')
    i = 0
  }
}else{
  i = 0
}//console.log(key)
}

function init(){
  document.body.addEventListener('keydown', keyDown)
}
