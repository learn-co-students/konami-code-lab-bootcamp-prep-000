const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.querySelector('body')
  let index = 0;

  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("30 lives!!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}

init()
