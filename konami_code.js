// Learn.co Bootcamp Prep 21 JavaScript Konami Code Lab

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.which || e.detail);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("YOU ENTERED THE KONAMI CODE!!!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
