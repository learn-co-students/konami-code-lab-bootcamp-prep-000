// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] - uses deprecated event.which values

const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight",  "ArrowLeft", "ArrowRight", "b", "a"]; // use correct event.key values instead of deprecated event.which values

var correctKeysCounter = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', eventHandler);

}

// this function exists solely because testing is fucked up 
//
// need a function to get the key pressed because testing does not use
// correct and current event.key values; 
// instead it creates an event with event.detail set to the deprecated
// keyboard event.which value
//
// so return the event.key or event.detail converted to a key value
function keyPressed(event) {
  var detailToKey = [];
  detailToKey[38] = "ArrowUp";
  detailToKey[40] = "ArrowDown";
  detailToKey[37] = "ArrowLeft";
  detailToKey[39] = "ArrowRight";
  detailToKey[66] = "b";
  detailToKey[65] = "a";
  
  if (typeof event.key === "string") { // assume it's an event.key value
    // console.log ("returning event.key");
    return event.key;
  } else { // assume in testing and convert detail to key value
    // console.log ("converting detail to key");
    return detailToKey[event.detail];
  }
}


function eventHandler(event) {
  
  // console.log("event detail is: " + event.detail + "; event which is: " + event.which + "; event location is: " + event.location + "; event key is: " + event.key + "; event char is: " + event.char);
  
   if (keyPressed(event) === code[correctKeysCounter]) { // seeing if equal to next key in code
    // console.log("=============got a correct key");
    correctKeysCounter++;
    if (correctKeysCounter === code.length) {
        alert("Congrats --- you entered the Konami Code correctly.");
        correctKeysCounter = 0; // reset to try again
    }
  } else {
    correctKeysCounter = 0; // reset and start looking again
  }
}

init();
