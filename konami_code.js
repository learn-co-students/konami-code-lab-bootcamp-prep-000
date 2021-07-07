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


var index = 0;
var body = document.body;
 
function init() {
  // your code here
 
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
    
    if (index === codes.length) {
      window.alert("Congratulations - You've cracked the code!");
      
      index = 0;
    } 
    } else {
      index = 0;
    }
    });
}