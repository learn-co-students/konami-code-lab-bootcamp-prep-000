const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
function init() {

  document.body.addEventListener('keydown', function(event) {
    const keyStroke = parseInt(event.detail || event.which);

    if (keyStroke === code[index]) {
      console.log(keyStroke);
      index++;
      console.log(index)
      if (index === code.length) {
        alert("27 Extra Lives!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  })
}
