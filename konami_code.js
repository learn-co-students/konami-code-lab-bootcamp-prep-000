const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector(`body`);
  let l = code.length;
  let i = 0;

  body.addEventListener(`keydown`, function(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[i]) {
    i++;
      if (i === l) {
      alert(`Secret Unlocked!`);
      i = 0;
      }
    } else {
      i = 0;
    }
  })
}

init();
