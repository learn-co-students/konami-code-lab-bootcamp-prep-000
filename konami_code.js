const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  document.body.addEventListener('keydown', event => {
    const keyPress = parseInt(event.detail || event.which);

  if (keyPress === code[index]) {
    index++;
    console.log(index);

    if (index === code.length) {
      alert("You've cracked the code!");
      index = 0;
    }
  } else {
    index = 0;
    console.log(index);
  }
  })
}
