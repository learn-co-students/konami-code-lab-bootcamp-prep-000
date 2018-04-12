const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var input = document.body

function init(){
   input.addEventListener('keydown', function onKeyDownHandler(input) {
  const key = parseInt(input.detail || input.which);
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
)}