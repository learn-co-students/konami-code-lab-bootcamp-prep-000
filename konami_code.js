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

let index = 0

document.addEventListener('keydown', (e)=>{init(e.key)}, true)

function init(e) {
 if(e === codes[index].toString()) {
   index++
   if(index === codes.length) {
     alert("You win")
     index = 0
 }
 } else {
   index = 0
 }
}

