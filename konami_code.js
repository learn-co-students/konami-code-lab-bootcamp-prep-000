function init() {

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function onKeyDownHandler(e) {
  // converts key press to keyboard event value
  const key = parseInt(e.detail || e.which);
  
  // if the keyboard event value is equal to the value of code[index]
  if (key === code[index]) {
    // increase the index number by 1
    index++;
      
    // if all correct keyboard events in a row, alert success
    if (index === code.length) {
      alert("Hurray!");
      // reset the counter
      index = 0;
    }
  }
  // if a mistake is made, start over
  else {
    index = 0;
  }
}

const input = document.querySelector('body');
input.addEventListener('keydown', function(e) {
  onKeyDownHandler(e)
})
  
}