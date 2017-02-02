const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var codePosition = 0;
function init() {

    const body = document.querySelector('body');
    body.addEventListener('keydown', function(e) {
      const key = parseInt(e.detail || e.which)

      if (key === code[codePosition]) {
          codePosition++;

          if(codePosition === code.length - 1) {
              alert("You found the secret!!!");
              codePosition = 0;
          }
      } else {
          codePosition = 0;
      }
  })
}
//init();
