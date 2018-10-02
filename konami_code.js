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
  document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    console.log(event.key);
  if (key === codes[index]) {
      alert("You cheated!")
    index++;
  }
      if (index ===codes.length) {

          index = 0;
   }

 else {
             index = 0;
   }
})}
    init()
