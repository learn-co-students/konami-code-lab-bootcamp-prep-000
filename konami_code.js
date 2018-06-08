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
  var index = 0;
  document.body.addEventListener('keydown', function(e) {
  	index = e.key == codes[index] ? index + 1 : 0;
  	if (index == codes.length) {
      alert('secret'); index = 0;
    }
  });
}
