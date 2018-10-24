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


let codeIndex = 0;

function onKeyDownHandler(e){
  let key = e.key;
  
  let targetKey = codes[codeIndex];
  if(key === targetKey){
    codeIndex++;
    if(codeIndex === codes.length){
      alert("Hurray!");
      codeIndex = 0;
    }
  }
  else{
    codeIndex = 0;
  }
}

function init() {
  // your code here
  document.body.onkeydown = onKeyDownHandler;
}
