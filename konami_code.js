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
  
 const body = document.querySelector('body')
 var index = 0
 
 body.addEventListener('keydown', function(event) {
    
    const key = event.key;
    console.log(key);
    
    
    if (key === codes[index]) {
      index++;
  
       if (index === codes.length) {
         alert("Hurray!");
         index = 0; 
       }
    } else {
       index = 0;
    }
  })
}
 

 

  
   
 


 
  
