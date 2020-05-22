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
const alphabet = ['a', 'b', 'c'];


function init() {
  let index = 0;
  document.body.addEventListener("keydown", onKeyDownHandler)
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray! You did it, Boss!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
}