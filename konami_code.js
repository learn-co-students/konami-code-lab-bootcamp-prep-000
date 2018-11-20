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

var progress = 0

function init() {
  // your code here
    document.body.addEventListener("keydown", codeSeek)

    function codeSeek(event) {
      var x = event.key;

      if (x === codes[progress]) {
          progress++;

          if (progress === codes.length) {
            alert("Hurray!");
            progress = 0
          }
        } else {
          progress = 0;
      }
    }
}

//init();
