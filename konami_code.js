const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const body = document.querySelector('body')

function init() {
  body.addEventListener('keydown', function(e) {
    // if user types the code in order, then send x alert
    const key = parseInt(e.detail || e.which);

    for (let i = 0, l = code.length; i < l; i++) {
      console.log(code[i])
    }
  } )

}
