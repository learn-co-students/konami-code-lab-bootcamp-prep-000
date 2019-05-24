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

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = e.key;
  if(key === codes[index]) {
    index++;
  } else {
    index = 0;
  }
  if(index === codes.length) {
    alert("You are a true master!");
    index = 0;
  }
}

init();