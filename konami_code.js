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

// Attach to document listener
  let bd = document.querySelectorAll('body')[0];
  

function init() {
  // your code here
  let index = 0;
  bd.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert("Nice job!");
        index = 0;
      }
      
    } else {
      index = 0;
    }
  });
  
  //function onKeyHandler(e) {
  //}
  
}

  

