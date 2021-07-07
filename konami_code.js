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

const keysPressed = [];
var lastTenKeys = [];

function init() {
  document.body.addEventListener('keydown', function(e) {
    var newKey = e.key;
    console.log(newKey);
    keysPressed.push(newKey);
    lastTenKeys = keysPressed.slice(keysPressed.length - 10);
    if (lastTenKeys.join("") === codes.join("")) {
      //console.log("KONAMI CODE!!!!!!!!!!!!!!!");
      alert("Congratulations! You've entered the Konami Code!");
    }
  })
}
