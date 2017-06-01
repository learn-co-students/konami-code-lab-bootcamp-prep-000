const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let ind = 0
let key = 0

document.body.addEventListener('keydown', function(e) {
  key = parseInt(e.detail || e.which)
  init()
})

function init() {
  // your code here
  if(key===code[ind]){
    ind++
  }
  else{
    ind = 0
  }
  if(ind===code.length){
    alert()
  }
}

function alert(){
  return console.log("my name is jeff")
}
