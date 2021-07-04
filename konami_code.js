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
const body = document.querySelector('body');

function init(e) {
  const key = e.key;
  
  if (key === codes[index]){
    index++;
    
    if (index === codes.length){
      alert('YOU ARE NOW BLESD BY DOGE');
      
      index = 0;
    }
  } else {
    index = 0;
  }
}

body.addEventListener('keydown', init)
