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

function init() {
  // your code here
  
  const bodyListener = document.body;
  
  bodyListener.addEventListener('keydown', konamiCode);
  
}

function konamiCode(e) {
  const typedKey = e.key;
  
  console.log(typedKey);
  
  if (typedKey === codes[index]){
    index++;
    
    if(index === codes.length) {
      alert('Congratulations! You entered the Konami Code! Now you have 30 extra lives (just kidding).');
      
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
