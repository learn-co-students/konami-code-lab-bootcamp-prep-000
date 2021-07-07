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

function init() {
  document.body.addEventListener('keydown', function(event) {
    if(event.key === codes[index]) {
      index++
      if(index === codes.length) {
        alert('Congratulations!')
        index = 0
      }
    }
    else
    index = 0
  });
}
