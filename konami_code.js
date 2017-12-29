const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  document.body.addEventListener('keydown', keyDownHandler);

  function keyDownHandler(k) {

    let key = k.location;

    if (key === code[index]){
      index++;

      if (index === code.length) {
        window.alert("Hurray!");

        index = 0;
      }
    }
    else {
      index = 0;
    }
  }
}
