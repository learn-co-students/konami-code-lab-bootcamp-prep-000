const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0


function initz(sneil) {
/*  if(sneil === undefined) {
    console.log("whoops")
    return
  } */

  const keyz = parseInt(sneil.location);
  console.log(keyz)

  if (keyz === code[index]) {
    index++
    if (index === code.length) {
      alert('Konami')
      index = 0
    }
  } else {
    index = 0
  }
}

function init(){
  const input = document.body

  input.addEventListener('keydown', initz)
}
