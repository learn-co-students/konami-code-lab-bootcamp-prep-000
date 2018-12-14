
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
  
   let index = 0
  
  document.body.addEventListener('keydown', function(e) {
  
  
    var inputKey = e.key;
  console.log(inputKey);
    var requiredkey = codes[index];
   
   
    if (inputKey === requiredkey) { 
      
       ++index;
       console.log(index);
       
    console.log(codes.length);
    
    if (index === codes.length) { 
       console.log(index);
       
      alert("Hurray! You get 30 lives!") ;
      
     
      index = 0;
    
      }  
     }else { 
      index = 0;
  }
})
}