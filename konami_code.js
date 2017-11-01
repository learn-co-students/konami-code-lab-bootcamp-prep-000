const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0; // Keep track of index outside of the event handler.

  document.body.addEventListener('keydown', keyDownHandler);

    function keyDownHandler(e) { // function invoked by the event listener.
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {  //if the entire konami code has been progressed through, alert
        alert("You did it!")
        index = 0;
      }
    } else {  //otherwise no alert
      index = 0;
    }
  }

}
