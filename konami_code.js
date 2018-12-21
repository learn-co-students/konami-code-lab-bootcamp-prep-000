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
  var index=0;
  document.body.addEventListener('keydown', event => {
    const correctInput=codes[index];
    const input=event.key;
    if (index===codes.length) {
      alert("Code Successfully Entered");
      return index=0
    }
    else if (input===correctInput) {
      index++;
    }
    else {
      index=0;
    }
  })
}

init()
