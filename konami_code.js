const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  var index = 0
  addEventListener('keydown', function(e) { // Fairly wild guess -- surprised that this actually worked.
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
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
