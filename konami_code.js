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

var index = 0;
var body = document.querySelector('body');
function init() {
  body.addEventListener('keydown',function(e) {
    if (e.key === codes[index]) {
      index++;
       if (index===codes.length) {
         alert("You did it!");
         index = 0;
       }
    } else {
      index = 0;
    }
  })}