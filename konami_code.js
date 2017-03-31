const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function z(e) {
  const key = parseInt(e.detail)

  if (key === code[index]) {
    index++

    if (index === code.length-1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}



function init(){
  for (let i = 0, l = code.length; i < l; i++) {
    document.body.addEventListener('keydown',z)
  }
}
