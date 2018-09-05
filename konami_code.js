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

 const body = document.querySelector('body')

function init() {
  
 body.addEventListener('keydown', function(event) {
  var index = 0
  
  function konamiCode(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
    
    if (index === codes.length) {
      alert("Hurray!");
      
      index = 0;
      }
    } else {
      index = 0;
    }
  }
 })
} 
 


 
  
