// Key codes for  Konami Code keys.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

let input = document.getElementsByTagName('body');

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  console.log ('key = ', key);
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
  console.log ('index', index);
}


input[0].addEventListener('keydown', function doReturn (event) {
  onKeyDownHandler(event);
  appendToHello(event.which);
//  return console.log (event.which);
//  alert('I was clicked!')
})
}
//c all init() to attach the event listener and set everything up!
