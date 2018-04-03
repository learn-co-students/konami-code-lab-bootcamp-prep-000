const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  const body = document.body.querySelector('body')
  const key = parseInt(keyPress.detail || keyPress.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("You've cracked the code!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
