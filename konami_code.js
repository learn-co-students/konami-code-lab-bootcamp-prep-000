const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


var index= 0

function init() {
  document.body.addEventListener('keydown', function(e) {
    console.log("hi")
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
      console.log(index)
      if (index === code.length-1) {
        alert('Fuck yeah!')
        index = 0
      }
    } else {
      index= 0
    }
  })
}
