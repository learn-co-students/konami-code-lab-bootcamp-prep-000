const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  //You'll want to attach an event listener to document.body and check for 'keydown' events.
  //If the user enters this special code, alert() a congratulatory message.
  //But if they start entering anything else anywhere along the way, don't trigger anything out of the ordinary.
  //When you're testing the code out, be sure to call init() to set everything up!

//example:
  // keep track of index outside of the event handler
  //var index = 0

  // unattached event handler
  // function onKeyDownHandler(e) {
  //   const key = parseInt(e.detail || e.which)
  //
  //   if (key === alphabet[index]) {
  //     index++
  //
  //     if (index === alphabet.length - 1) {
  //       alert("YOU DID IT!")
  //       index = 0
  //     }
  //   } else {
  //     index = 0
  //   }
  // }
  let index = 0;
  const body = document.body;


  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert('You pressed the right key!')
        index = 0
      }
    }
      else {
        index = 0
      }
    })
}
    init ();
