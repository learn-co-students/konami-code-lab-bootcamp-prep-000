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

let index = 0;
const bodyPress = document.getElementById('body');


function init() {
  // your code here
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === 10) {
        alert("CHEAT CODE ENABLED!");
        
        index = 0;
      }
      
    } else {
      index = 0;
    }
  }
}

document.body.addEventListener('keydown',   function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === 10) {
        alert("CHEAT CODE ENABLED!");
        
        index = 0;
      }
      
    } else {
      index = 0;
    }
  });
