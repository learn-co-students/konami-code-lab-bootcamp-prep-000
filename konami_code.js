const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var pressedKey = [];
var counter = 0;

function onKeyDownHandler(e) {
  if(parseInt(e.detail || e.which) === code[counter]) {

    counter++;

    if(counter === code.length){
      alert("Hurray!");
      counter = 0;
    }

  } else {
    counter = 0;
  }
}

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', onKeyDownHandler);
}
