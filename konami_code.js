
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
]

 

let index = 0;

function onKeyDownHandle(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Congratulations!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init(){
  var x = document.querySelector("body")
  x.addEventListener("keydown", onKeyDownHandle)
}