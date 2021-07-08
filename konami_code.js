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
  // your code here

 var ndx = 0;
 
 document.body.addEventListener('keydown', onKeyDownHandler);
 
 function onKeyDownHandler(e) {
   const key = e.key;
   console.log('key:', key)
   if( key === codes[ndx]) {
     ndx++;
     
     // Found code
     if( ndx === codes.length) {
      alert("Hurray!");
       ndx = 0;
     }
     
   }
   
   //Reset index to continue listening for correct code
   else {
     ndx = 0;
   }
 }
  
}


