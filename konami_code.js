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

var i = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    if(e.key === codes[i]) {
      i++;
      if(i === codes.length) {
        alert('Congratulations!');
        i = 0;
      }
    } else {
      i = 0;
    }
  })
}
