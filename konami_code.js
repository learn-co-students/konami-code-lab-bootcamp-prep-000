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

const input = document.body;
var index = 0;

input.addEventListener('keydown', function init(e){
  const key = e.key;
  
  if (key == codes[index]){
    index++;
  
  if (index === codes.length){
    alert("Congrats!!");
    index = 0;
  }
  }
  else {
    index = 0;
  }
} 
);





