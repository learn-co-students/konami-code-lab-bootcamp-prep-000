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

var index = 0;

function init() {
  // your code here
  const input = document.body.addEventListener('keydown',
  function(e) {

  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length - 1) {
      alert("YOU DID IT!");
      index = 0;
    }
  } else {
    index = 0;
  }
})
}

//init(code);
