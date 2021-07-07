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
   let i = 0

  document.body.addEventListener("keydown", (event) => {
    if (codes[i] === event.key) {
      i += 1
    } else {
      i = 0
    }
    if (i === codes.length) {
      alert("Hurray!");
      i = 0
    }
  })
}
