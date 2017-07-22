const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', checkCode);
}
function checkCode(e){
  const key = parseInt(e.detail || e.which);
  if (key === code[index]){
    index++;  //advance in the code
    if (index === code.length){ //reached the end of the code...
      alert('Unlimited Lives.');
    }
  }
  else {
    index = 0;  //reset to check code from beginning
  }
}
