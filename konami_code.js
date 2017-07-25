const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0
  document.addEventListener('keydown', function(e){
    var key = parseInt(e.which || e.detail)
    if (key === code[index]) {
      index++
      //console.log(key) //for testing
      if (index === code.length) {
        alert("Cheat code activated!")
      }
    } else {
      index = 0
    }
  })
  }

init()
