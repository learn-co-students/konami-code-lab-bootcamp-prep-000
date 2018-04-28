const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var body = document.querySelector('body');
  var codevar = [];

  body.addEventListener('keydown',function(e) {
    codevar[codevar.length] = e.which
    if (codevar.length === 11) {
      codevar.shift()
    }
    if (codevar === code) {
      console.log(`God Mode Activated`)
    }
    
  })
}