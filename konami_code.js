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
  var index = 0;
  function onKeyDownHandler(e) {
    if (e.key === codes[index]) {
    index++;
    if (index === codes.length) {
    alert('Great!');
    index = 0; }
    } else {
    index = 0;
    }
  };
  document.body.addEventListener('keydown', onKeyDownHandler);
  return onKeyDownHandler(e);
}