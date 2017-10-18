const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var comp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let index = 0

function init() {
  const main = document.body
  main.addEventListener('keydown', onKeyDownHandler)
}

init()

function onKeyDownHandler(e){
  const key = parseInt(e.which || e.detail)
  console.log(e.which || e.detail)

  if (key === code[index]){
    index++
    if (index === code.length){
      alert('Congratualtions!')
      index = 0
    }
  } else{
    index = 0
  }
}
