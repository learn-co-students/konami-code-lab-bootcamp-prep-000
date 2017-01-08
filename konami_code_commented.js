// Learn.co Bootcamp Prep 21 JavaScript Konami Code Lab

// Define a function, 'init', that accepts no parameter(s):
// Attach an 'keydown' event listener to 'document.body'.
function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}     // Call before trying to test code.

// Define 'code' as an array that includes the keypress code numbers.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Define 'index' and initialise to 0 to keep track of index outside of the
// event handler.
var index = 0;

// Define a function, 'onKeyDownHandler', that accepts one parameter(s):
// 'e': a 'keydown' event.
function onKeyDownHandler(e) {
  // Set key equal to the integer value of the key that was pressed.
  const key = parseInt(e.which || e.detail);

  // If 'key' is equal to the value of the current index in code:
  if (key === code[index]) {
    // Increment the index by one.
    index++;

    // If the index is equal to the length of the 'code' array:
    if (index === code.length) {
      // Alert the user with a congratulatory message.
      alert("YOU DID IT!");
      // Set index back to zero.
      index = 0;
    }
  // Else (if) 'key' is not equal to the value of the current index in code:
  } else {
    // Set 'index' back to zero.
    index = 0;
  }
}
