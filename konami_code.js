const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
  document.body.addEventListener(`keydown`, function(e) {
    var key = parseInt(e.detail || e.which)
    console.log(`key ${parseInt(e.detail)}`)
    keydownHandler(key)})

  // Write your JavaScript code inside the init() function
  function keydownHandler(key) {
//    var key = parseInt(e.detail || e.which)
    if (key == code[index]) {
      index++
      if (index == code.length) {
        alert("Konami Code Success!!")

        index = 0
      }
    } else {
      index = 0
    }
  }
}

/*
var key

function onKeydownFunction(e) {
    key = e.detail || e.which
}

function callback() {

}
document.addEventListener('keydown', onKeydownFunction)
*/
