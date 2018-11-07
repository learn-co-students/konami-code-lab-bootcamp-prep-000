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
  let index = 0;
console.log(index);
  document.body.addEventListener("keydown", function(event) {
    const pressedKey = event.key;

    if (pressedKey === codes[index]) {
      ++index;

      if (index === codes.length) {
        window.alert("CONTRA!!!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
