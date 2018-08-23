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
var index = 0;  
  document.body.addEventListener('keydown', function(e) {
    console.log(e.key)
    if (codes[index] === e.key) {
      index++;
    } 
    else {
      index = 0;
    }
    if (index === codes.length) {
      alert('Congrats');
      index = 0;
    }
  })
   }
