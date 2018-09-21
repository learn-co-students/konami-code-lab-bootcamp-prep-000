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
document.addEventListener('keydown', function (event) {
const key=event.key
if(key===codes[index]) {
  console.log(key)
  index++;
  console.log(index)
  
  if(index===codes.length){
    alert("YOU DID IT!");
    index=0
    
  }
  
}
    else {
      index=0
      
    }
  }
  )}

    
    