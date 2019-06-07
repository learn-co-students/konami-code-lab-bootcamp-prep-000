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
const input = document.body;

input.addEventListener(`keydown`, function(e) {
  if (e.key === codes[index]){
    index++;

    if (index === codes.length){
      alert("Congratulations!");
      index = 0;
    }
  } else {
    index = 0;
  }
});
}
