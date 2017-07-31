const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  //Keep track of index outside of the event handler.

  let index = 0

  //add event listener to keydown inputs, pushing keys to inputArray

  document.body.addEventListener('keydown', function(e) {

  // create key for input keydowns

    let key = parseInt(e.which || e.detail)

  // if key matches code array index, increase index var

    if (key === code[index]) {
      index++;

  // if index var equals length of code array, konami code has been entered

      if (index == code.length) {
        alert("Congratulations!")
        index = 0;

  // if key input does not match, reset index to 0 and start over

      }
    } else {
      index = 0;
    }

  })

}
