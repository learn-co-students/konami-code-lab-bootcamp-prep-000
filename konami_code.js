const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
/*
    for (let i = 0, l = code.length; i < l; i++) {
      if (code[i] === parseInt(e.detail || e.which)) {
        match +=1
      }
      else {
        match = 0
      }
    }
    if (match === 10) {
      alert('Congratulations!')
    }
  })
}

*/
