const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var body = document.querySelector('body');

function init() {
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);
    var index = 0;
    if (key === code[index]) {
      index++;
      if(index === code.length -1) {
        alert('You did it!');
        index = 0;
      }
      else {
        alert('You entered the wrong code!');
        index = 0;
      }
    }
  });
}
