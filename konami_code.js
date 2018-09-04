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

let index = 0

function onKeyyDownHandler(e) {
  const key = e.key
  
  if (key === codes[index]) {
      index++
      
      if (index === code.length) {
        alert("Hurray!")
        
        index = 0
      }
  }   else {
    index = 0
  }
}

function init() {
  // your code here
}
