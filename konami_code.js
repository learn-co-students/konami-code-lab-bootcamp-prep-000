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

onKeyDownHandler(e){
  const k = e.key;
  
  if (key === codes[index]){
    index++
    
    if (index === codes.length) {
      alert('Congratulations!')    
    }
  else{index = 0}
  }
  }

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler(e))
}
