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

var index=0;

function init() {
  index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
}


function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      window.alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

