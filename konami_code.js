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

function konamiCheck(e){
  const key = e.key;
  if(key==codes[index]){
    //console.log(`Good ${index} next`);
    index++;
    
    if(index==codes.length){
      alert("Hurray");
      index = 0;
    }
  } else{
    index = 0;
  }
}

function init() {
  // your code here
  document.body.addEventListener('keydown', konamiCheck)
}
