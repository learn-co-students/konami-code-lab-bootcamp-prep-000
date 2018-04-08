const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// up up down down left right left right b a

var keycode = [];

const main = document.getElementById('main');

main.addEventListener('keydown', function(e) {
  init(e.which);
  // console.log(e.detail);
  // console.log(e.which);
});

function init(argument) {
  keycode.push(argument);

  console.log(keycode);

  if (keycode.toString() === code.toString()) {
    alert('Konami Code Has been Activated!');
  } else if (keycode.length > code.length) {
    keycode.shift();
  }
}
