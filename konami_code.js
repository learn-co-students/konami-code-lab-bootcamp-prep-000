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

let index = 0;
function init() {
  document.body.addEventListener('keydown', function(event){
    const keyPress = event.key;
    if (keyPress === codes[index]) {
      index++; 
    
      if (index === codes.length) {
        alert("congrats!");
        }
    
      } else {
        index = 0
      }
}, false);  
  

}