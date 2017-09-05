var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function activation(){
  alert("Konami!")
}

function init() {
  var main = document.body
  main.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which)
    var keyNeeded = code[index]
    if (key == keyNeeded){
      index++
      if (index+1 == code.length){
        activation()
      }
    }else{
      index = 0
    }
  })
}
