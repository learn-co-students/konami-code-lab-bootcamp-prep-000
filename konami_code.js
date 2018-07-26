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

var counter =0
  document.body.addEventListener("keydown",(event)=>{
   
   var keyName = event.key
   
   if(keyName===codes[counter]){
     counter++

     if(counter===codes.length){
        counter=0
       alert("Codes Entered Correctly");
       
     }
     
   }else{

     counter=0
     
   }
 })
}
