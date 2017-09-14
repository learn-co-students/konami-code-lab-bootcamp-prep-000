const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0
  document.querySelector('body').addEventListener('keydown', function(e){
    let key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Konami!')
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
