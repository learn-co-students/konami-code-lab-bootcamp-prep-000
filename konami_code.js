var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init() {
  // Write your JavaScript code inside the init() function
  var body = document.body
  body = body.addEventListener('keydown', function(e) {
    var key = parseInt(e.which || e.detail)
    if(key === code[index]) {
      index++
      if(index === code.length) {
        alert("Congratulations!");
        index = 0
      }
    } else {
      index = 0
    }
  })
}
