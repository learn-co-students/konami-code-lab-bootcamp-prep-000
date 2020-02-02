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
}
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var konamiCode = 0;
//added event listener
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key === code[konamiCode]) {
      konamiCode++

      if (konamiCode === code.length -1) {
        alert('Yeyi it worked!')

        konamiCode = 0
      }
    } else {
      konamiCode = 0
    }
  })
}