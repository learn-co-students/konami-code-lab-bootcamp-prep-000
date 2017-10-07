const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;

  document.body.addEventListener("keydown", function(e) {

  // get numerical value of key
  const key = parseInt(e.detail || e.which)


  // compare keypress with current position in konami code
  if (key === code[index]) {

    // if this is the end of the code, print the message
    if (index === code.length - 1) {

      alert("Congratulations, Shinji!")

      index = 0;
    }

    // if this is not the end of the code, increment
    else {
      index++;
    }


  } // end if

 // if it's not in the code, reset to 0
  else {
    index = 0;
  }

}) // end function

}
