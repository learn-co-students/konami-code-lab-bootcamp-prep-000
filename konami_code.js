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
  let i = 0;
  document.body.addEventListener('keydown', function(e) {
  if (e.key === codes[i]) {
    i++;
    if (i === codes.length) {
      alert('hoorah!');
      i = 0;
    }
  }
  else { 
    i = 0;
  } 
});
}