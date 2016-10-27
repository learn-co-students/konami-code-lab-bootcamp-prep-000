const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // your code here
  var index = 0

  document.body.addEventListener('keydown', function(event) {
    // the detail property returns a number that indicates how many
    // times the mouse was clicked in the same area
    // .which returns the numeric code of the key that was pressed
    const key = parseInt(event.detail || event.which)

    if (code[index] === key) {
      index++

      if (index === code.length - 1) {
        alert("Congrats!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}

/*
You'll want to attach an event listener to document.body and check for
'keydown' events. If the user enters this special code, alert() a
congratulatory message. But if they start entering anything else
anywhere along the way, don't trigger anything out of the ordinary.
When you're testing the code out, be sure to call init() to set
everything up!

1) attach eventListener
  - check for keydown actions
  - if the user enters the konami code, alert() a message
  - else, trigger nothing
*/
