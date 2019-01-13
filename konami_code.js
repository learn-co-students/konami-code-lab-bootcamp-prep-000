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

index = 0;

function init() {
  function onKeyDownHandler(e) {
    const key = e.key || e.codes
    
    if (key === codes[index]) {
      i++
      
      if (key === codes.length) {
        alert("KONAMI CODE")
        index = 0
      }
      else {
        index = 0
      }
      
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler);
}
