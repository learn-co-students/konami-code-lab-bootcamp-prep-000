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
  document.body.addEventListener('keydown', keydownHandler);

  var index = 0;

  function keydownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert('CONGRATULATIONS!');
        index = 0;
      }
    } else {
      index = 0;
    }

  }
}
