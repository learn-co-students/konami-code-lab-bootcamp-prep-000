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

var index = 0;

function keyHandler(e) {
  const key = e.key;
  
  if (key===codes[index]) {
    index++;
    
    if (index===codes.length) {
      alert('Congatulatory message');
      
      index = 0;
    }
  }
  
  else {
    index = 0;
  }
}

function init() {
  document.body.addEventListener('keydown',function(e) {
    keyHandler(e) });
}
