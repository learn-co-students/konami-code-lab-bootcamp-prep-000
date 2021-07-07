const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

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




