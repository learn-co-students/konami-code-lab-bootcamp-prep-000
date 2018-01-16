const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  
  document.addEventListener('keydown', onKeyDownHandler)
  
  let i = 0
  
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    console.log(e.detail + ' ' + e.which)
    if (key === code[i]) {
      i++
      
      if (i === code.length) {
        alert('congrats, you entered the code')
        i = 0 
      }
    } else {
      i = 0
    }
  }
}

init()