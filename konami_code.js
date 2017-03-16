const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init(e) {
  // add event listener to document.body and check for keydown, if 'code' is entered then use an alert to congratualate them
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("Congratz")
        index = 0
      }
    } else {
      index = 0
    }
  })

}
