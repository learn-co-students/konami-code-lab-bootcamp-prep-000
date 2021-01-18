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
  // your code here	  var index = 0
  document.body.addEventListener('keydown', function(e) {
    var key = e.key
    if (key === codes[index]) {
      console.log("Key logged:" + key);
      ++index
      if (index === codes.length) {
        alert("Hurray!!! You found the EasterEgg!")
      }
    } else {
      index = 0
    }
  });
}	}