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
  
  let i = 0;
  let body = document.body;
  
  body.addEventListener("keydown", (event) => {
    if (event.key === codes[i]) {
      i++; 
      if (i === codes.length) {
        alert("RIP Konami!"); 
      }
    }
    else {
      i = 0;
    }
  })
}