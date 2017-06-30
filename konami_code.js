const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

index = 0

function init(){
  const input = document.querySelector('body')
  input.addEventListener('keydown', keyDownHandle)
}

function keyDownHandle(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]){
    index++
    if (index === code.length - 1){
      alert("Surprise!")
    }
  } else {
    index = 0
  }
}




