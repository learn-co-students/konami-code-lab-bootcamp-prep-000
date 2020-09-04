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
let counter=0
document.body.addEventListener("keydown", function(e){
 let k=e.key
  if (k===codes[counter]){
    counter++
    
    if (counter===codes.length){
      alert("Hurray")
      counter=0
    }

    }
      else {
      counter=0
  }
})
}
init()