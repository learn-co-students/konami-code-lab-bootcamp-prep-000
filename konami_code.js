const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
var index = 0;
document.addEventListener('keydown',function(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length - 1) {
      window.alert("YOU DID IT!");
      index = 0;
    }
  } else {
    index = 0;
  }
}, false);
}
