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
  let index = 0;
  document.body.addEventListener('keydown', keyPressed)
  
  function keyPressed(event) {
    const aKey = event.key
    if (aKey === codes[index]) {
      index++
      
    if (index === codes.length) {
      alert("Woohoo!")
      
      index = 0
    }
    } else {index = 0}
  }
}