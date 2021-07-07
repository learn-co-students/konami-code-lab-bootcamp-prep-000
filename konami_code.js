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



  function init(){
let orderedCounter = 0
 document.body.addEventListener('keydown', function(e){
  if(e.key === codes[orderedCounter]){
	orderedCounter++
  if(orderedCounter === codes.length){
		alert("Hurray!")
    orderedCounter = 0
	}
} else {
	orderedCounter = 0
}
 })
}
