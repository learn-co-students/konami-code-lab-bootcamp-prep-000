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

let index = 0;

function codeTest(e) {
  if (e.key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("What it do?");
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  document.body.addEventListener("keydown", codeTest);
}

init();
