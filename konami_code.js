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
  let body = document.querySelector('body');
  let pressed = [];
  body.addEventListener('keydown', function(k) {
    pressed.push(k.key)
    if (pressed.length > 10) {
      pressed.shift();
    }
    if (pressed.length === 10) {
      let checker = true;
      pressed.forEach((item, index) => {
        if (item !== codes[index]) {
          checker = false;
        }
      })

      if (checker) {
        alert('Konami!');
      }
    }
  })
}
