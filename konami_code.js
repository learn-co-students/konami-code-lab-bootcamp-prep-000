const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0



function init() {
  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {


      if (index === code.length - 1) {
        alert("Boom")
        index = 0
      }
    } else {
        index = 0
    }
    index++
  })
  // you want to add your eventListener and all the logic is nested inside

}

// another function
