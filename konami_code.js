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

let idx = 0;
function init(e) {
  const key = e.key;
  
  if(key === codes[idx]){
    idx++;
    
    if(idx === codes.length){
      alert("Congrats!");
      
      idx = 0;
    }
  } else {
    idx = 0;
  }
}
