const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    let i = 0;
    document.body.addEventListener('keydown', function(e) {
      if (e.detail === code[i]) {
          i++;
          if (i === code.length-1) {
              alert();
          }
      } else {
          i = 0;
      }
  });
}
