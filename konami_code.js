const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  window.addEventListener("keydown", function(event){



  var correctKeys = parseInt(event.detail || event.which)

  if (correctKeys === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0 
    }
  } else {
    index = 0
  }
    })
}
