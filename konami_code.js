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
  document.body.addEventListener('keydown', checkForCode);
}

let index = 0;

function checkForCode(e){
  
  const key = e.key;
  
  if ( key === codes[index] ) {
    index++;
    
    if(index === codes.length) {
      alert("Good job!");
      
      index = 0;
    } 
    } else {
      index = 0;
  }
}

init();