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


function konami(e) {
  var key = e.key;
  console.log(e.key)
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("Congratulations!");
      
      index = 0;
    }
  } else {
    index = 0;
  }
}
  





function init() {
  const body = document.body;
  body.addEventListener('keydown',konami); {
  }
}

/* Don't need this: [38 up] [40 down] [37 left] [39 right] [66 b] [65 a]   */