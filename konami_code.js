const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;



function init() {
  const input = document.querySelector('body')
  input.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    const pressedKey = parseInt(e.detail || e.which);
    console.log(e.which);

    if (pressedKey === code[index]) {
      index++;

      if (index === code.length) {
        alert(`Congrats, you unlocked the Konami code!`);
        index = 0;
      }
    } else {
      index = 0;
    }
  }

}
