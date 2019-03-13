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
  const input = document.body;
  var index = 0;
  input.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert(`Congratulations!`);
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  );
}
