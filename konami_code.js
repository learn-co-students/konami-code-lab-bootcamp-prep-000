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

let counter=0;
function init() {
document.body.addEventListener('keydown', (e) =>{	
onKeyDownHandler(e)
})

}
  function onKeyDownHandler(e) {
	 
	var key = e.key;
	
  if (key === codes[counter]) {
	  console.log(key)
    counter++;
    if (counter === codes.length) {
      alert("Hurray!");
      counter = 0;
    }
	} 	else {
		counter = 0;
		}
	}
  