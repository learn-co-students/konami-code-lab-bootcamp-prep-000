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
  var index = 0;
  document.body.addEventListener("keydown", konamiCode);
  
  function konamiCode(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Top Secret Mode Unlocked");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}