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

function keyPress(e) {
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("Hurray!");
      
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  //add event listener
  document.body.addEventListener('keydown', keyPress);  
}
