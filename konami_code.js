const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
];

let index = 0;

function init() {
  const body = document.querySelector("body")
  body.onkeydown = logKey;
  function logKey(e){
    if(e.code === codes[index]){
      index++
    }
    else{
      index = 0
    }
    if(index === codes.length)
    {
      index = 0
      alert ("Way to go!")
    }
  }
}
