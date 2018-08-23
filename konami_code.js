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
  let index = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        
        alert('Congratulations!');
        
        index = 0;
      }
    } else {
      index = 0;
      }
    
  }
const body = document.body;

body.addEventListener('keydown', onKeyDownHandler)  
  
}


