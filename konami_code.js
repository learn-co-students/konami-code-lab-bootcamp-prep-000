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
  // set index to 0 so you can control it throughout
  let index = 0;
  // added event listener to the body of the document and listened for keys pressed
  document.body.addEventListener('keydown', function(event) {
    // if the key pressed matched the codes array
    if (event.key === codes[index]) {
      // if all 10 keys are pressed, message displays
      if (index === 9) {
        alert('Hurray')
      // if not you add one to the index
      } else {
      index += 1;
      }
    // if they key does not match it sets the index back to 0 to start over
    } else {
      index = 0;
    }
  });
}
