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

let index = 0;

var body = document.querySelector('body')
body.addEventListener('keydown', init)

function init(e) {
  var key = e.key;
  if(key === codes[index]) {
    index++;
    if(index === codes.length) {
      alert('Yipee!');
      index = 0;
    } else {
      index = 0;
    }
  }
}
