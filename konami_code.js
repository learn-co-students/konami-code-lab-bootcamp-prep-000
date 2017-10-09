// up, up, down, down, left, right, left, right, B, A
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  const body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which || e.location);

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
}
