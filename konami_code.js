const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//up up down down left right left right b a

function init() {
  var index = 0;
  function keyListener(e){  //defines function
      var whichKey = parseInt(e.which || e.detail);  //notes char code for each key pressed
      if (whichKey == code[index]){ //sees if pressed key matches current array index
        index++; //moves to the next index in the array in order to compare the next input
        if (index == code.length){ //if the index is the same value as array.length, the whole array has been compared
          window.alert("CODE ACTIVATED!"); //sets the alert
          index = 0; //returns index back to zero or default
        }

      } else { //if the pressed key doesnt match current array index, resets index to 0 (the beginning)
        index = 0;
      }
  }
  document.body.addEventListener("keydown", keyListener);

}
