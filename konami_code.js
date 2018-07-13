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

var index = 0;

function init() {
  
  document.body.addEventListener('keydown',function(e){
    const key = e.key;
    if(codes[index]==key){
      index++;
      if(index===codes.length){
      alert('YES!!!!!');
      index=0;
    }
    }
  });
  
}
