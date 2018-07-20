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

var keyDownArr = []

function init() {
  
}
  document.body.addEventListener('keydown', function(event){
  keyDownArr.push(event.key)

  for (let i=0; i < keyDownArr.length; i++){
    if (codes[i] !== keyDownArr[i]){
      keyDownArr=[]
      break;
    } 
  }

  if (codes.length == keyDownArr.length){
    alert("FUCKING DONE WANKER");
  }})