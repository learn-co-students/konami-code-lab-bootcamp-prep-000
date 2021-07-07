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
  var index = 0;
  var keyCodes = [];
  
  document.body.addEventListener('keydown', konamiHandler);
  
  function konamiHandler(e) {
    //Store value of key pressed
    const key = e.key;
    
      if(key === codes[index] && index <= codes.length) {
        //Add key to array for comparison
        keyCodes.push(key);
        index++;
        console.log(key, keyCodes);
        
        if(index === codes.length) {
          alert(1);
          index = 0;
          keyCodes = [];
          console.log(codes.length + " codes.length");
          //document.body.removeEventListener('keydown', konamiHandler);
        }
   
      } else {
        index = 0;
        keyCodes = [];
      } 
  }
  
}

