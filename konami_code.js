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
  // tests were looking for the target at document.body
  // so window._ didn't work.
  var listener = document.body.addEventListener("keydown", checkKeys)
  
  // set up a counter
  count = 0
}

function checkKeys()
{
  var keyPressed = event.key
  
  // begin the game
  if(keyPressed === codes[count])
  {
    count++
    
    if(count === codes.length)
    {
      //console.log("Secret Code Unlocked: GOD MODE is ON!!")
      window.alert("Secret Code Unlocked: GOD MODE is ON!!")
      count = 0
    }
  }
  else
  {
    count = 0
  }
}
