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

var index=0

function init() {
  document.body.addEventListener("keydown",konamiCodeChecker)
}

function konamiCodeChecker(e){
 if (e.key===codes[index]){
   index++
   if (index===codes.length){
     alert("Hurray!")
     index=0
   }
 } else{
   index=0
 }
}