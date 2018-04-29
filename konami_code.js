let x = document.querySelector('body')
let index = 0
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

}

x.addEventListener('keydown', function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
})
