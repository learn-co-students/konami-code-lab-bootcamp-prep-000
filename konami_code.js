const codess = [
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
let index = 0
function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
  function onKeyDownHandler(e) {
    const keys = e.key;
 
    if (keys === codess[index]) {
      index++;
 
      if (index === codess.length) {
        alert("Hurray!");
 
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}