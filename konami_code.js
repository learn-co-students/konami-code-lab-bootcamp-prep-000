const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body
let i = 0
function onKeyDownHandler(e) {
   const key = parseInt(e.detail || e.which);
 
  if (key === code[i]) {
    i++;
 
    if (i === code.length) {
     
      alert("Hurray!");
 
      i = 0;
  }
  } else {
    i = 0;
  }
}
body.addEventListener('keydown', onKeyDownHandler,true);
}
init()