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

 var index = 0;

function init() {
  document.addEventListener('keydown', function(e) {
    var key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === alphabet.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
