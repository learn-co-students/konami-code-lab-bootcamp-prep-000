const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index=0
  function onKeyPress(e) {
    const key = parseInt(e.detail || e.which, 10)
    if (key === code[index]) {index++
      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {index = 0} 
    
  }

  document.addEventListener('keydown', onKeyPress)
}

init()