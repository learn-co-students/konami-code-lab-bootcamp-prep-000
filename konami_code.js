const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
document.body.addEventListener('keydown',onKeyDownHandler)
var index=0;
function onKeyDownHandler(keydown){
var key=parseInt(keydown.detail||keydown.which||keydown.location);
if(key===code[index]){
  index++;
  if (index===code.length){
  window.alert('Congrats!');
  index=0;
    }
  }
    else{
      index=0;
    }
  }
}
