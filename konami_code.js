const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {
  document.getElementsByTagName('body')[0].addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      console.log('correct');
      index++;
      if (index === code.length) {
        alert('Congrats!');
        index = 0;
      }
    } else {
	console.log('false');
    index = 0;
    }
  });
}
