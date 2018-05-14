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
  let body = document.querySelector("body")
  let i = 0;
  body.addEventListener('keydown', function(e) {
  let keyPressed = e.key;  
      if (keyPressed.toString() == codes[i]) {
        i++;
      }
      else {
        i = 0;
      }
  if (i == codes.length) {
      alert("Hurray!");
      i=0;
  }
  });
}

init();