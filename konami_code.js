const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    } else {
      index++
    }
  } else {
    index = 0
  }
}

// function init() {
//   document.body.addEventListener('keydown', function (e){
//     alert('Congrats!')
//   })
//   // your code here
// }


function init(){
  document.body.addEventListener('keydown', onKeyDownHandler)
}
