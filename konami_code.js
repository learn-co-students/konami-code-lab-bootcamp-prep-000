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

var index = 0

init;

function init() {
  // your code here
  const body = document.body;
  body.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which) 
  
    if (key === code[index]) {
      index++
  
      if (index === code.length - 1) {
        alert("You did it!")
        index = 0
      } 
    } else {
      index = 0
    }
  })
}