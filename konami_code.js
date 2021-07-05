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




function init(e) {
 
let index = 0;

document.body.addEventListener("keydown", (e) => {
  const key = e.key 
  console.log(key) 
  
  if (codes[index] == key) {
    ++index 
  } 
  
  else {
    idx = 0 
  }
  
  console.log(index)
  if (index == 10) {
    alert("INFINITE LIVES!!");
    index = 0 
  }
}); 
}