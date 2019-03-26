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
let index = 0;
document.body.addEventListener('keydown', function(e) {
  let key = e.key;
  if(key === codes[index]) {
    index++;
  }
  if(index === codes.length) {
    alert('YES!');
    index = 0;
  }
});
}   


