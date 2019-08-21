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
document.body.addEventListener ("keydown",processKey);
}
var index=0;

function processKey(event){
  const keyPressed= event.key;

  if(keyPressed===codes[index]){
    index++;
  }
  else{
    index=0;
  }
  
  if(index===codes.length){
    alert ("Hurray!");
    index=0;
  }
}
init();


