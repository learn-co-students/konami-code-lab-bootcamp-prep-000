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

window.pressed = 0;

function init() {
  document.body.addEventListener("keydown", (event) => {
    let key = event.key;
    console.log(key);
    if (key === codes[window.pressed]) window.pressed++;
    else window.pressed = 0;
    if (window.pressed === codes.length) alert("Hurray");
  });
}
