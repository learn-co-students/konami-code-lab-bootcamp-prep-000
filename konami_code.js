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

const body = document.body;

let i = 0;

  function init() {
    body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[i]) {
      i++;
      if (i === codes.length) {
        alert("Hurray!");
        i = 0;
      }
    } else {
      i = 0; 
    }
  });
  }
  