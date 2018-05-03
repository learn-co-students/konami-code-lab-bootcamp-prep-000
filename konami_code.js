
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let step = 0;

function init() {
  document.body.addEventListener('keydown', (press) => {
    const button = parseInt(press.which);

    if (button == code[step]) {
      step++;
      if (step == 10) {
        alert("Konami Code entered!");
        step = 0;
      }
    } else {
      step = 0;
    }
  });
}
