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
  let idx = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[idx]) {
      if (++idx === codes.length) {
        idx = 0;
        alert("Well done.");
      }
    } else idx = 0;
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler)
}
