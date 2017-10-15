const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
const body = document.querySelector('body');

function init() {
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Congratulations, you have successfully entered the Konami Code!');
        index = 0;
      }

    } else {
      index = 0;
    }
  });

}
