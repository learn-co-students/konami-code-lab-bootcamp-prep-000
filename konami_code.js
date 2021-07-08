const Code = [
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

function init() {
  let step = 0;
  document.body.addEventListener(`keydown`, function(press) {
    const button = press.key;
    if (button === Code[step]) {
      step++;
      if (step === 10) {
        alert(`Konami Code entered!`);
        step = 0;
      }
    } else {
      step = 0;
    }
  });
}

