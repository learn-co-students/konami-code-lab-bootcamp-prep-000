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

var indy = 0;
function konami(e){
  var k = e.key;
  
  if(k === codes[indy]){
     indy++;
     
     if(indy === codes.length){
       alert("COngrats");
       indy = 0;
     }
    
  }
  else{
    index=0;
  }
  
}






function init() {
  // your code here
  document.body.addEventListener('keydown', konami);
}
