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
 
  document.body.addEventListener('keydown', function(e) {
    
    var input = e.key;
  
    if (input === codes[index]) {
    
      index ++;
    
    if (index === codes.length) {
     
     alert('Konami Code For Life!!!!!');
      
      index = 0;
      

      
  }
}

});
}