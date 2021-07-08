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
  document.body.addEventListener('keydown',
    function(e) {
      e.preventDefault();
      if (codes[i] === e.key) {
        i++;
        if (i === codes.length) {
          alert("Hooray!");
        }
      } else {
        i = 0;
      }
    }
  )
}
