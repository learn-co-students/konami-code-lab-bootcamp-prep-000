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
  
  let i = 0 // index pointer

  document.body.addEventListener("keydown", (what) => {
    const key = what.key
    
    if (key === codes[i]) {
      ++i;
    } else {
      i = 0;
    }
    
    if (i === codes.length) {
      window.alert("Hurray!");
      i = 0
    }
    
  });
}
