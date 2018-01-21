const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener("keydown", onKeyDown);
  let index = 0;
  function onKeyDown(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("You found it!");
        index = 0;
      }
      } else {
        index = 0;
      }
    }
  }

  init();
