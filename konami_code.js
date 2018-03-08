const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', youGotIt)
  let index = 0;
  function youGotIt(event) {
    const key = parseInt(event.detail || event.which)
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Congraulations!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
