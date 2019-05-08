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
var main = document.body;

function init() {
  // your code here
  main.addEventListener('click', function(event) {
  if (event.key === codes) {
  alert('I was clicked!');
} else {
  console.log(event.key);
}
});
}
