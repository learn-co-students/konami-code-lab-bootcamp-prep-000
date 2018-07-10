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
let i = 0;

function init() {
 document.body.addEventListener('keydown', function(e) {
 
 
    if (codes[i] === e.key) {
      i++;
      
    
      if (i === codes.length)  {
        
        alert("Hurray!")
        i = 0;
      }
    }
    else {
      i = 0;
    }
    

 });
}
