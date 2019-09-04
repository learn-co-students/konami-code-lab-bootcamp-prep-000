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
  const body = document.querySelector("body")
  document.body.addEventListener("keydown", logKey);
  function logKey(e){
    if(e.key === codes[index]){
      index++
    }
    else{
      index = 0
    }
    if(index === codes.length)
    {
      index = 0
      alert("Hurray!");
    }
  }
}
