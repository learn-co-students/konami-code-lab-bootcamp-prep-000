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
  // your code here
  var keysPressed=[];
  document.body.addEventListener("keydown", function(e) {
    const key=e.key;
    keysPressed.push(key);
    var success=keysPressed.length == codes.length ? true : false;
    for (var x=0;x < keysPressed.length;x++) {
      if (keysPressed[x] != codes[x]) {
        keysPressed.length=0;
        success=false;
      }
    }
    if (success) {
      alert("You are now invincible!");
    }
  });
}
