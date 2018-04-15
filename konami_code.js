const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
const input = document.querySelector('keydown')
function onKeyDownHandler(e){
  const key = parseInt(input.detail || input.which)
   if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function(e) {
  var key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("YOOOOOOKOOOONAMI");
      konamiCodePosition = 0;
    }
  } else {
    index = 0;
  }
});
}
