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
const body = document.querySelector('body')
body.addEventListener('keydown', function (e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Finish Him!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
})
}
