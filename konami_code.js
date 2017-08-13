const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// Up, Up, Down, Down, Left, Right, Left, Right, B, A

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("You are in!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler);
}
