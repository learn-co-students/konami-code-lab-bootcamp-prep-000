const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

document.body.addEventListener('keydown',init)

function init(e) {
 const key = parseInt(e.keyCode)
  if (key === code[index]){
    index++
  }
  else {
    index = 0
  }
  if (index === code.length){
    alert('You have unlocked the secrets of the web. Use your power wisely')
    index = 0
 }
}
