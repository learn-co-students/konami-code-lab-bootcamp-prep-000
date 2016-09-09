const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  var input = document.querySelector('body');
  input.addEventListener('keydown', password);

}
var index = 0;

function password(x) {
  const key = parseInt(x.detail || x.which)

  if (key === code[index]) {
    index++;
    if (index === code.length - 1) {
      alert('Generic Congratulatory Message Here')
    }
  }
  else {
    index = 0;
  }
}
