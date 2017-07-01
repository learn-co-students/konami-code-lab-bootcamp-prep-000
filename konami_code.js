// up up down down left right left right b a
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')
function init() {
  // keep track of index outside of the event handler
  var index = 0
   body.addEventListener("keydown",onKeyDownHandler);
  // unattached event handler
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    debugger;
    if (key === code[index]) {


      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
      else {
        index++
      }
    } else {
      index = 0
    }
  }
}
