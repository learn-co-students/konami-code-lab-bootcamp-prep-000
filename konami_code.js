const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  window.addEventListener("keydown", function (event) {
  const key = parseInt(event.detail || event.which)
    if (key === code[index]){
    index ++
    console.log(event.which)
    
    if (index === code.length) {
      return window.alert ("congrats bro")
    }
    }    
  })
}

init()
