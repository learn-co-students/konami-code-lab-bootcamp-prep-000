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
  // your code here
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0

    if (idx === codes.length) {
      alert("Hurray!");
      idx = 0
    }

  });
}













// function init() {
//   // your code here
//   document.body.addEventListener('keydown', onKeyDownHandler)
// }
//
// let index = 0;
//
// function onKeyDownHandler(e) {
//   const key = e.key;
//   if (key === codes[index]) {
//     index++;
//     if (index === codes.length) {
//       alert("Hurray!");
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }



// You'll want to attach an event listener to document.body and check for 'keydown' events. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.
//
// When you're testing the code out in the browser, be sure to call init() to attach the event listener and set everything up!

// Stuck on how to get started? Here's a contrived, short example:
//
// Keys for A, B, and C keys.
// const alphabet = ['a', 'b', 'c'];
//
// Keep track of index outside of the event handler.
// let index = 0;
//
// // This is the function that would be invoked by the event listener.
//
//
//
//
// function onKeyDownHandler(e) {
//   const key = e.key;
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
