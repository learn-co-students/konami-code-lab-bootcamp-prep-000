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

  function init(){
    
var index = 0;
document.body.addEventListener('keydown',(event) => {
  
  var key = event.key;
    
    if (key === codes[index]){
      index ++;
      
      if(index === codes.length) {
        alert( 'Yay you did it !!!');
        index = 0;
      }
    } else {   
      index = 0;
      
    }
} )
  
  }    
  

