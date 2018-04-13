const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  const body = document.querySelector('body')
  
  body.addEventListener('keydown', function keytrigger(e) {
    let key = parseInt(e.which || e.detail)
    for (let i = 0; i < code.length; i++) {
      if (key === code[i]) {
        alert("Congrats, you made it!")
        } else {
          code[i]
        }
    }
  }
  )
}