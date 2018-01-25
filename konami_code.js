const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){
  let index = 0
  document.body.addEventListener('keydown', function(e){
    if(parseInt(e.location) === code[index]){
      index++
      if(index===code.length){
        window.alert("Welcome, Lain.")
        index=0
        }
    }else{
    index=0
    }
  })
}