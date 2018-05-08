const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', checkKeyDown)

  function checkKeyDown(e) {
    const key = e.key;

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Good job!');
      }
        index = 0;
    } else {
      index = 0;
    }

    console.log('key pressed');
    console.log(index);
  }
}
