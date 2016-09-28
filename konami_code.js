const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {

  document.addEventListener('keydown', function(e){
    const press = parseInt(e.detail)
    if (press === code[index]){
      index++
      if (index === 10){
        alert ('CONTRA!')
      }
    }
    else {index = 0}
  })
}
