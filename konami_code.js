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
  let i=0;
  document.body.addEventListener('keydown', function (event) {
    var correctInput=codes[i];
    console.log("This is the event.key", event.key)
    do {
      if (event.key===correctInput) {
        i++
      }
      else {
        i=0
      }
    }
    while (i<codes.length);
    alert("Code successfuly entered.");
    return i=0
  })
}

init()
