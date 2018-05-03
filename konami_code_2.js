
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
  myCode = [
    `ArrowUp`,
    `ArrowUp`,
    `ArrowDown`,
    `ArrowDown`,
    `ArrowLeft`,
    `ArrowRight`,
    `ArrowLeft`,
    `ArrowRight`,
    `b`,
    `a`
  ];
let step = 0;

function init() {
  document.body.addEventListener(`keydown`, (press) => {
    const button = press.key,
      sign = parseInt(press.which || press.keyCode);

    if (sign === code[step] || button === myCode[step]) {
      step++;
      if (step > 9) {
        alert(`Konami Code entered!`);
        step = 0;
      }
    } else {
      step = 0;
    }
  });
}

init();
