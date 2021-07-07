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
document.body.addEventListener('keydown', function onKeyDownHandler(input) {
  const key = input.key;
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("You unlocked the Konami Code!");
      index = 0;
      }
    } else {
      index = 0;
    }
  });
}
