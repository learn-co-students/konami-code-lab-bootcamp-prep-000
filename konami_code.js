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
  document.body.addEventListener('KeyboardEvent',keycodes)
}

function keyCodes(e){
  const key=e.key;
  if (key === codes[index]) {
    index++;
  } 
  if (index === codes.length){
    alert('Hooray!');
    index = 0;
  } else {
    index = 0;
  }
}
