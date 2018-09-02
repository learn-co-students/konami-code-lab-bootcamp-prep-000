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

function triggerKeyDown(key) {
  const keyboardEvent = new KeyboardEvent("keydown", { key });
  document.body.dispatchEvent(keyboardEvent);
}

function onKeyDownHandler(e) {
  const key = e.key;

  if (key = codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Congratulations");

      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  const body = document.body;

  body.addEventListener('keydown', onKeyDownHandler);
}

init();
