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

var a = 0

function init() {
 document.body.addEventListener("keydown", keydownHandler)
}
function keydownHandler(e){
  const key = e.key
  if(key === codes[a]) {
   a++ 
   if(a === codes.length) {
     alert("Success")
     a = 0
   }
  }
  else {
    a = 0
  }
 
}
