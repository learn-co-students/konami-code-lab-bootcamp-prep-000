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
  document.body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("You are winning the game now good job.");
    }
  } else {
    /* reset the index to ensure only the correct key sequence 
       triggers the alert 
    */
    index = 0;
  }
}

init()