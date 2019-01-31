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
  function onKeyDownHandler(e) {
    if (e.key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert('Great!');
    }
    } else {
    index = 0;
    }
  };
  document.body.addEventListener('keydown', onKeyDownHandler);
}
