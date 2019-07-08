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

//const keys_values = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
//const sum_of_keys_pressed = [];
function init() {
  let index = 0;

  document.body.addEventListener("keydown", triggerKeyDow);

  function triggerKeyDow(event) {
    const keyPress = event.key;

    keyPress === codes[index] ? ++index : 0;

    if (index === codes.length) {
      alert("You Won!");

      index = 0;
    }
  }
}
