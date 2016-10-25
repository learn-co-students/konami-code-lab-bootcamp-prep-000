const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// keep track of index outside of the event handler
var index = 0

//You'll want to attach an event listener to document.body and check for 'keydown' events.
//If the user enters this special code, alert() a congratulatory message.

//function init(e) {
//document.onkeydown = function init(e) {

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}
init();  // need to call init()


// note: could make onKeyDownHandler(e) function anonymous and change line above to:
// document.body.addEventListener('keydown', function(e) {

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++

    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}




// const alphabet = ['a', 'b', 'c']
//
// // keep track of index outside of the event handler
// var index = 0
//
// // unattached event handler
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
