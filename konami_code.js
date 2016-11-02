const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init(event) {



  document.body.addEventListener('keydown', function(event) {

  const key = parseInt(event.detail || event.which)

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}) //close parentheses which was screwing me up.
}
//init(event)
//  eventListener = document.body
  //eventListener.addEventListening('keydown',function(event))
