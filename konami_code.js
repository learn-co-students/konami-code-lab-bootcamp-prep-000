const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
  document.body.addEventListener("keydown", function (event) {
  const key = parseInt(event.detail || event.which)
    if (key === code[index]){
    index ++
    console.log(event.which)
    
    if (index === code.length) {
      window.alert ("congrats bro")
    }
    }else {
     index = 0
    }    
  })
}

init()
