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

//we dont accept the event inside this function
function init() {
  
  let index = 0;
  
  //move the event listener into here and this is where we pass the event inside 
  
  document.body.addEventListener('keydown', (e) =>{
  
  const key=e.key;
  
  if(key===codes[index]){
    index++;
    
    if(index===codes.length){
      alert("Congrats!");
      
      index = 0;
    }
  }else{
    index=0;
  }
    
    })//close the listener down here 
    
    
}
