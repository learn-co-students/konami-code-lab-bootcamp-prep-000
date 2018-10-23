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
  
  var i = 0;
  var last = codes.length - 1;
  
 
  function konamiCheat(e){
   
     //console.log(e.key);
     //console.log('last: ' + last + "; last entry: " + codes[last]);
     
     
     if(e.key === codes[i]) {
       i += 1;
       console.log("i: " + i);
       
       if(e.key === codes[last]) {
         alert("Yeah Du geile Sau");
         i = 0;
       }
     
     } else {
       i = 0;
       console.log("noob! i: " + i);
     }
   
  }
 
 document.body.addEventListener('keydown', konamiCheat);
}
