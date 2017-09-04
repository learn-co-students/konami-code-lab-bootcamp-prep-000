const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

 function konamiCode(e) {
  const key = parseInt(e.detail || e.which);
  // console.log(key);
  // console.log(code[index]);
  if (key === code[index]) {
    index++; // If right key pressed, increment index to look for next Konami key
  }
  else {
    index = 0; // If wrong key pressed, reset index to 0
  }
  // Checks to see if full Konami code has been entered
  if (index === code.length) {
    alert('Congratulations!');
    index = 0;
  }
 }

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown',konamiCode);

}
