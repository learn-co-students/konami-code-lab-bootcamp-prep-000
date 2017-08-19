const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  document.body.addEventListener('keydown', function(e){
    var keyStroke = parseInt(e.which || e.detail)
    var counter = 0;
    if (counter === code.length){
      console.log("Congrats! You have entered the correct code")
    }
    for (var i = 0; i < code.length; i++) {
      if (keyStroke === code[i]) {
          counter++;
          alert(e);
      }
      else {
        counter = 0;
      }
    }

  })

}
