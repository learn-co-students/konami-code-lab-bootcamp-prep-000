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
document.body.addEventListener("keydown", (keyPressed) => {
  const key = keyPressed.key 
  console.log(key) 
  
  if (codes[index] == key) {
    ++index 
  } 
  
  else {
    index = 0 
  }
  
  console.log(index)
  if (index == 10) {
    window.alert("Hurray!");
    index = 0 
  }
}); 
}

