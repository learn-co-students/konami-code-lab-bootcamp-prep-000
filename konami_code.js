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
let i = 0
function init() {
  document.body.addEventListener('keydown', function(e) {
   let key = e.key
   if (key === codes[i]) {
     i++;
     if (i === codes.length){
       alert('You did it bb');
       index = 0
     }
   } else {
     index = 0
   } 
  })}