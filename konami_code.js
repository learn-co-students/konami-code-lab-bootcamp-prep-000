const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // set up a page listener
  var listener = document.addEventListener("keydown", checkKeys)
}

function checkKeys()
{
  var keyPressed = event.key;
  
  console.log(`Keypress Detected: ${keyPressed}`)
  
  var count = 0
  
  // begin the game
  if(keyPressed === codes[count])
  {
    
  }
  
  
  
}
