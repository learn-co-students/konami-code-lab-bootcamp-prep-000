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
  document.body.addEventListener('keydown', onKeyDownHandler)
  var index = 0
  function onKeyDownHandler(ArrowUp) {
    const key = ArrowUp.key;
    if (key === codes[index]) {
      index++
    if(index === codes.length) {
      alert("Hurray!")
      index = 0;
    }
  } else {
    index = 0
  }
}
}