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
  let index = 0;
  document.body.addEventListener('keydown',function(event){
    const key = event.key;
    if(key === codes[index]){
      index++;
    
      if(index === codes.length){
        alert("Finished the code!");
        index = 0;
      }
    }else{
      index = 0;
    }
    
  });

}
