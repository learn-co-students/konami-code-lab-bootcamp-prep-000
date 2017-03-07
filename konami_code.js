const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var i = 0
  document.body.addEventListener("keydown", function(e) {
    var key = parseInt(e.which || e.detail)
    if(code[i] === key) {
      i++
      if (i === code.length - 1) {
        alert("hurray!)")
        i = 0
      }
    } else {
      i = 0
    }
  })
}
