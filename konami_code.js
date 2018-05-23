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
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
   const key = event.key;
  for(let i=0;i<codes.length;i++){
  if (key === codes[i]) {
     index++;
  
   if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      
   }} 
   else {
    index = 0;
  }
  }   
  });
 
}
