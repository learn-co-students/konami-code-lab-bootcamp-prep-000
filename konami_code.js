const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  function pressedKey(e){
    let keypress = parseInt(e.detail || e.which); //set our key to be a constant var
    if(keypress === code[index]){ //if the key pressed is === to our current index in code,
      console.log(keypress);
      index++; //increment to the next index of code.
      if(index === code.length){ 
        alert('you did it!');
        index = 0; //reset our index.
      }
    } else { //otherwise, if the key wasn't right, reset.
    console.log(keypress);
      index = 0;
    }
  }
  document.addEventListener('keydown', pressedKey);
}
