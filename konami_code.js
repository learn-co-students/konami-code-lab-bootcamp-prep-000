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
 let index = 0
 document.body.addEventListener('keydown',function(event){
let key = event.key
    if (codes[index] === key){
    index++ 
      if (index === codes.length){
     alert("Congratulations, Sir, on cracking the Konami Code.")
}
}
   else {
     index = 0;
   } 
  
})
}