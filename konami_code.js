const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
function init(e) {
  const input = document.querySelector('body');
  input.addEventListener('keydown', function(e) {
  console.log(e.which);
  const key = parseInt(e.detail || e.location || e.which);
  if (key === code[index] ) {
    index++;
    if (index === code.length) {
      alert('Congrats, you pressed the right keys');
      index = 0;
    }
  } else {
    index = 0;
  }
  });
}