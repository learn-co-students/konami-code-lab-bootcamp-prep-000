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

let currentKeyCount = 0

function init() {
  
  document.body.addEventListener("keydown", function(pressed){
    
    if(pressed.key === codes[currentKeyCount]) {
      
        currentKeyCount++
        
      if(currentKeyCount === codes.length) {
        
        alert("OMGAWD YOU PRESSED SOME BUTTONS");
        currentKeyCount = 0
      }
    }
  })
}

init()