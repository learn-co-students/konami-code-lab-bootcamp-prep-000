const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown',keyDownHandler)
}

let index = 0;
//You'll want to attach an event listener to `document.body` and check for `'keydown'` events.
//If the user enters this special code, `alert()` a congratulatory message.
//But if they start entering anything else anywhere along the way, don't trigger anything out of the ordinary.
function keyDownHandler(event){
  const key = parseInt(event.detail || event.which)

  if (key===code[index]){
    index++

    if (index===code.length-1){
      alert('Congrats!')
      index=0
    }
  } else {
    index=0
  }
}
