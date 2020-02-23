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
  // your code here
}


let index = 0;

document.body.addEventListener("keydown", (thingPressed) => {
  const key = thingPressed.key 
  console.log(key) 
  
  if (codes[index] == key) {
    ++index 
  } 
  
  else {
    idx = 0 
  }
  
  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0 
  }
}); 
