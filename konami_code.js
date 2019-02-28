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
  // your code here
  let cheat = 0;

  document.body.addEventListener("keydown", (e) => {
    const key = e.key;
    cheat = (codes[cheat] === key) ? ++cheat : 0

    if (cheat === codes.length) {
      window.alert("Hurray!");
      cheat = 0
    }
  });
}
