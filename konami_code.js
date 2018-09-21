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
 
 const main = document.body;
 
  main.addEventListener('keydown', function(event) {
  const key = event.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
});
}
// I'm adding this line to push an update