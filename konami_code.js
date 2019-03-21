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

var i = 0;
var body = document.body;

function init() {
  if (i === codes.length - 1) {
    window.alert("you did it!");
    console.log("Booyah!")
    i = 0;
  }
}

body.addEventListener('keydown', function(e) {
    if (e.key === codes[i]) {
        console.log(`key ${i} has been pressed. ${codes[i]}`)
        init();
        i++;
    } else {
        i = 0;
        console.log("back to square one");
    }
});
