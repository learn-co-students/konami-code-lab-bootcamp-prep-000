const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]  //store konami code as array in constant

function init() {

  var index = 0;

  document.body.addEventListener('keydown', function(e) { //add event listener for keydown, callback

  const key = parseInt(e.detail || e.which || e.location);

  if (key === code[index]) {  //if required key is pressed
    index++;                //move to the next key

        if (index === code.length) {   //if length of code is input
          alert("Hurray!");            //alert hurray
          index = 0;                    //set index back to 0
          }

  } else {
    index = 0;                      //if not entered, reset index to 0
  }
});
}

init();
