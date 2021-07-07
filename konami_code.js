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
let i = 0;

function init() {
  document.body.addEventListener('keydown', function(event) {
    let key = event.key;
    if (key === codes[i]) {
      i++;
    } else {
      i = 0;
    }
    if (i === codes.length) {
        alert('Hurray!');
        i = 0;
    }
})
}
