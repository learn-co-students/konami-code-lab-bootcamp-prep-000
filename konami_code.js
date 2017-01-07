// Learn.co Bootcamp Prep 21 JavaScript Konami Code Lab

// Define 'code' array.
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Define 'index' to keep track of the index outside of the event handler.
var index = 0;

// Define a function, 'onKeyDownHandler', that accepts one parameter:
// 'e', an event.
// If user enters the 'code', alert() a congratulatory message.
// Else, don't trigger anything.
function onKeyDownHandler(e) {
  // Set 'key' to call parseInt() on the key. (If event handler passes the
  // string representation of the key that has been pressed, it is converted to
  // the integer representation of that key.)
  const key = parseInt(e.which || e.detail);

  // If 'key' is equal to the code index
  if (key === code[index]) {
    // Increment the index by one.
    index++;

    // If 'index' is equal last index of the 'code' array
    if (index === code.length - 1) {
      // Congratulate the user with an alert()
      alert("YOU ENTERED THE KONAMI CODE!!!")
      // set index to 0
      index = 0;
    }

  } else {
    // set index to 0
    index = 0;
  }
}

// Define a function, 'init', that accepts no parameters.
// Attach an event listener to 'document.body' and check for 'keydown' events.
function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}
