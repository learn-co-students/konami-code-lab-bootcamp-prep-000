const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
var test = []

function init() {
  // your code here
  document.addEventListener('keydown', function(e) {
  var key = parseInt(e.detail || e.which)
  test[index] = parseInt(key)
  index = index + 1
  if (test.toString() == code.toString()) {
    console.log("yes")
    alert("You did it!!!")
  }
})
}
