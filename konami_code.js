const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener("keydown", konami);

  var index = 0;

  function konami(event) {
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;
      if (index === code.length-1) {
        alert("You entered the Konami Code.");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}

init()
