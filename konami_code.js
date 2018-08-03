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
 var index=0
 document.body.addEventListener('keydown',function(e){
   var key=e.key

   if(key===codes[index]){
   
     index++

     if(index===codes.length){
    console.log("before")
      window.alert("KONAMI!")
      console.log("skipped")
       index=0
     }
   }
     else{
    
       index=0
     }
     
   

 })
}
