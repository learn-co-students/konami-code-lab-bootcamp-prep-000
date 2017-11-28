// // const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// // let index = 0;
// //
// // function init(e) {
// //   const key = parseInt(e.detail || e.which);
// //   if (key === code[index]) {
// //     index++;
// //     if (index === code.length) {
// //       alert('Hurray!');
// //       index = 0;
// //     }
// //   } else {
// //     index = 0;
// //   }
// // }
// // init();
//
// // var keys = [];
// // const code = [38,38,40,40,37,39,37,39,66,65];
// //
// // document.addEventListener('keydown', (e) => {
// //     keys.push(e.keyCode);
// //     keys.splice(-code.length-1, keys.length-code.length);
// //     if (keys == code) {
// //         alert('hurray');
// //         keys = [];
// //     }
// //     else {
// //       keys = [];
// //     }
// // }
//
// // function init() {
// //   // document.body.style.backgroundImage = "url('images/cheatBackground.png')";
// //   //
// //   // var audio = new Audio('audio/pling.mp3');
// //   // audio.play();
// //   alert("cheats activated");
// // }
//
// var allowedKeys = {
//   37: 'left',
//   38: 'up',
//   39: 'right',
//   40: 'down',
//   65: 'a',
//   66: 'b'
// };
//
// var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
// var konamiCodePosition = 0;
//
// function onKeyDownHandler(e) {
//   var key = allowedKeys[e.keyCode];
//   var requiredKey = konamiCode[konamiCodePosition];
//   if (key == requiredKey) {
//     konamiCodePosition++;
//     if (konamiCodePosition == konamiCode.length) {
//       alert("cheats activated");
//       konamiCodePosition = 0;
//     }
//   } else {
//     konamiCodePosition = 0;
//   }
// }
//
// window.addEventListener('keydown', onKeyDownHandler());

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

// This is the function that would be invoked by the event listener.
function init(event) {
  const key = parseInt(event.detail || event.keyCode || event.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
init();
