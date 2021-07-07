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
  document.body.addEventListener("keydown", e => {
    if (e.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Life counter set to 30.");
      }
    } else {
      index = 0;
    }
  });
}
