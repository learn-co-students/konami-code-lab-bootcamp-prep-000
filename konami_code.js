const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0
var key = []
document.addEventListener('keydown', function(e) {key.push(e.which)})

function init() {
  // Write your JavaScript code inside the init() function
  //const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");
    }
    else { index = 0;}
  }


}
