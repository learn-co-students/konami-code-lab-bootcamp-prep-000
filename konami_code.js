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
  var int = 0
  var keyboardEvent = document.body.addEventListener("keydown", function(event){
    if (event.key == codes[int]) {
      if (int == (codes.length) - 1) {
        alert('Congrats!')
      }
      int++;
    } else {
      int = 0
    }
  });
}
