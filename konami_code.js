const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0;
function init() {
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === code[i]) {
          i++;
          if (i === code.length-1) {
              alert();
          }
      } else {
          i = 0;
      }
  });
}
