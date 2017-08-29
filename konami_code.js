const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] //The keystrokes are up, up, down, down, left, right, left, right, B, A, Enter.

function init() {
  code;
  let index = 0;
  document.body.addEventListener("keydown", function(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("You did it!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
