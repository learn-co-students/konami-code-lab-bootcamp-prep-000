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

function init() {
  document.body.addEventListener('keydown',function(e){
   
    if (e.key === codes[index]){
      index++
      if (index === codes.length){
        alert("Contra!");
        index = 0
      }
    }
    else{
      index = 0
    }
    
  })
}
