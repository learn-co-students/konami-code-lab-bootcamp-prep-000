const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  //create variable to track index of code array
  var index = 0;

  //add event listener to document body
    //check event for 'keydown'
    //function should accept e as an argument
  document.body.addEventListener('keydown', function(e) {
    //create variable that will turn which key user pressed into a number
    var userKey = parseInt(e.which || e.detail);

    //if user key pressed is equal to our current code array index
      //increment index
    if (userKey === code[index]) {
      index++;

      //if our index is equal to the length of the code array
        //the user has successfully typed the konami code in sequence
        //alert a congratulatory message
        //reset index to zero
      if (index === code.length - 1) {
        alert('Congratulations! You have activated the KONAMI code!');
        index = 0;
      }
    } else {

      //reset index to zero because the user has entered the wrong sequence
      index = 0;
    }
  });
}
