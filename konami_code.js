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
  document.body.addEventListener("keydown", (e) => {
    
    const key = e.key; // tells us which key was pressed
   
    if (key === codes[index]) {
      // console.log(key)
      
      index++;
   
      if (index === codes.length) {
        alert("Hurray");
   
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}


// init()
